export function customValidator() {
  /** 入力必須検証 */
  const required = (value: any) => value ? true : '入力必須です'

  /** メールアドレス形式検証 */
  const email = (value: string) => (/.+@.+\..+/.test(value)) ? true : 'メールアドレスが不正です'

  return { required, email }
}



