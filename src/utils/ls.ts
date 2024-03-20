export const loadFromLs = <T>(key: string, d: T) => {
  const item = window.localStorage.getItem(key)
  if (item == null) return d
  return JSON.parse(item)
}
