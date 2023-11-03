export function commonConstants() {
  /** ステータスコード */
  const STATUS_CD = {
    NOT_YET: 1,
    PROGRESS: 1,
    COMPLETE: 2,
  } as const

  return { STATUS_CD }
}