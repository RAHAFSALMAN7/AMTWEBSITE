export function localize<T = string>(
  field: Record<string, T> | T | null | undefined,
  lang: string
): T | "";
