import { getAuth, signInWithEmailAndPassword, signOut as fbSignOut, setPersistence, browserSessionPersistence, inMemoryPersistence } from 'firebase/auth'
export function useAuth() {
  /** firebase token */
  const token = useState<string>('token', () => '')
  /** ログイン */
  const signIn = (email: string, password: string) => {
    const auth = getAuth()
    const isLoading = utilFunc().isLoading
    isLoading.value = true
    setPersistence(auth, browserSessionPersistence)
    // セッションストレージに保持。
    // TODO: セッションの状態を検知し、自動でログイン状態にする処理必要
    setPersistence(auth, browserSessionPersistence).then(() => {
      return signInWithEmailAndPassword(auth, email, password).then(async userCredential => {
        const user = userCredential.user
        token.value = await userCredential.user.getIdToken()
      }).catch(error => console.log('signInWithPasword error')).finally(() => isLoading.value = false)
    })
  }

  /** ログアウト */
  const signOut = () => {
    const auth = getAuth()
    return fbSignOut(auth).then(() => {
      token.value = ''
    })
  }

  return { token, signIn, signOut }
}