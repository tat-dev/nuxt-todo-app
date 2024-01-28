import { User } from "firebase/auth"

export function useUser() {
  const user = useState<User | null>('user', () => null)
  const setUser = (_user: User | null) => user.value = _user
  return { user, setUser }
}