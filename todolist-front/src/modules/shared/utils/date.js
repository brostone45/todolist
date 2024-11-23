const fullDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const fullMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function getFormattedDate() {
  const day = getCurrentDay()
  const month = getCurrentMoth()
  const dayNumber = getCurrentDayNumber()

  return `${day}, ${month} ${dayNumber}`
}

export function getCurrentDay() {
  const date = new Date()
  return fullDays[date.getDay()]
}

export function getCurrentDayNumber() {
  const date = new Date()
  return date.getDate()
}

export function getCurrentMoth() {
  const date = new Date()
  return fullMonths[date.getMonth()]
}

export function getCurrentYear() {
  const date = new Date()
  return date.getFullYear()
}

export function getRageDate({ daysBeforeToday, daysAfterToday, includeCurrentDay = true } = {}) {
  const range = []
  const currentDate = new Date()

  if (daysBeforeToday) {
    const rangeBefore = getRangeBeforeADay({ daysBefore: daysBeforeToday, date: currentDate })
    range.push(...rangeBefore)
  }

  if (includeCurrentDay) {
    range.push({
      dayNumber: currentDate.getDate(),
      dayName: shortDays[currentDate.getDay()],
      isCurrentDay: true,
    })
  }

  if (daysAfterToday) {
    const rangeAfter = getRangeAfterADay({ daysAfter: daysAfterToday, date: currentDate })
    range.push(...rangeAfter)
  }

  return range
}

export function getRangeBeforeADay({ daysBefore, date }) {
  const range = []

  for (let i = daysBefore; i > 0; i--) {
    const day = new Date(date.getTime())
    day.setDate(day.getDate() - i)

    range.push({
      dayNumber: day.getDate(),
      dayName: shortDays[day.getDay()],
      isCurrentDay: false,
    })
  }

  return range
}

export function getRangeAfterADay({ daysAfter, date }) {
  const range = []

  for (let i = 1; i <= daysAfter; i++) {
    const day = new Date(date.getTime())
    day.setDate(day.getDate() + i)

    range.push({
      dayNumber: day.getDate(),
      dayName: shortDays[day.getDay()],
      isCurrentDay: false,
    })
  }

  return range
}
