export function useSnackbar() {
  const state = useState<boolean>('snackbar', () => false)
  const message = useState<string>('snackbar-message', () => '')
  const add = (_message: string) => {
    state.value = true
    message.value = _message
  }
  const remove = () => {
    state.value = false
    message.value = ''
  }
  return { state, message, add, remove }
}