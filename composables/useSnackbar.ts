export function useSnackbar() {
  const state = useState<boolean>('snackbar', () => false)
  const message = useState<string>('snackbar-message', () => '')
  const color = useState<string>('snackbar-color', () => '')
  const add = (_message: string, _color: string = '') => {
    state.value = true
    message.value = _message
    color.value = _color
  }
  const remove = () => {
    state.value = false
    message.value = ''
  }
  return { state, message, color, add, remove }
}