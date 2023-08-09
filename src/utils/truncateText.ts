const maxLength: number = 45

export function truncateText(text: string): string {
  if (text.length <= maxLength) {
    return text
  }
  return text.substring(0, maxLength) + '...'
}
