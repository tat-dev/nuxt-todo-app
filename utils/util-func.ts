export function utilFunc() {
  /** loading */
  const isLoading = useState<boolean>('isLoading', () => false)

  return { isLoading }
}