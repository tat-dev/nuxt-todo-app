import { getAuth, signInWithEmailAndPassword, signOut as fbSignOut, setPersistence, browserSessionPersistence } from 'firebase/auth'

export function useAuth() {
  const { setUser } = useUser()
  const { add } = useSnackbar()
  const { isLoading } = utilFunc()
  const auth = getAuth()
  /** ログイン */
  const signIn = (email: string, password: string) => {
    isLoading.value = true
    // TODO: セッションの状態を検知し、自動でログイン状態にする処理必要
    setPersistence(auth, browserSessionPersistence).then(() => {
      signInWithEmailAndPassword(auth, email, password).then(async userCredential => {
        setUser(userCredential.user)
      }).catch(error => {
        console.log(error)
        add('メールアドレスもしくはパスワードが間違っています', 'red')
      }).finally(() => isLoading.value = false)
    })
  }

  /** ログアウト */
  const signOut = () => {
    const auth = getAuth()
    return fbSignOut(auth).then(() => {
      setUser(null)
    })
  }

  return { signIn, signOut }
}