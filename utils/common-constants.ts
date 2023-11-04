export function commonConstants() {
  /** ステータスコード */
  const STATUS_CD = {
    NOT_YET: 1,
    PROGRESS: 2,
    COMPLETE: 3,
  } as const

  return { STATUS_CD }
}