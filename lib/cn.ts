/** 조건부 className 머지(외부 의존성 없이). falsy 값은 무시. */
export function cn(
  ...parts: Array<string | false | null | undefined>
): string {
  return parts.filter(Boolean).join(" ");
}
