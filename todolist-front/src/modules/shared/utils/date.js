export function getFormattedDate() {
  const day = getCurrentDay()
  const month = getCurrentMoth()
  const dayNumber = getCurrentDayNumber()

  return `${day}, ${month} ${dayNumber}`
}

export function getCurrentDay() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const date = new Date()
  return days[date.getDay()]
}

export function getCurrentDayNumber() {
  const date = new Date()
  return date.getDate()
}

export function getCurrentMoth() {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const date = new Date()
  return months[date.getMonth()]
}

export function getCurrentYear() {
  const date = new Date()
  return date.getFullYear()
}

