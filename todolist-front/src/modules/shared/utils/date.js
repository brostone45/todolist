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

export function getRageDate({ daysBeforeToday, daysAfterToday, includeCurrentDay = true } = {}) {
  const range = []
  const daysNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  const currentDate = new Date()

  if (daysBeforeToday) {
    for (let i = daysBeforeToday; i > 0; i--) {
      const day = new Date()
      day.setDate(currentDate.getDate() - i)

      range.push({
        dayNumber: day.getDate(),
        dayName: daysNames[day.getDay()],
      })
    }
  }

  if (includeCurrentDay) {
    range.push({
      dayNumber: currentDate.getDate(),
      dayName: daysNames[currentDate.getDay()],
      isCurrentDay: true,
    })
  }

  if (daysAfterToday) {
    for (let i = 1; i <= daysAfterToday; i++) {
      const day = new Date()
      day.setDate(currentDate.getDate() + i)

      range.push({
        dayNumber: day.getDate(),
        dayName: daysNames[day.getDay()],
      })
    }
  }

  return range
}

