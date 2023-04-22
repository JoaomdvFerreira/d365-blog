export const currentDayName = () => {
  const date = new Date()
  return date.toLocaleDateString('en-US', { weekday: 'long' })
}
