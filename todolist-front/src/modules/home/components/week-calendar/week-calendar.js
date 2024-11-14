import { getCurrentDayNumber, getRageDate } from "../../../shared/utils/date"

export function weekCalendar() {
  const currentDay = getCurrentDayNumber()
  const weekContainer = document.createElement('section')
  weekContainer.classList.add('week-calendar')

  const daysList = getRageDate({ daysBeforeToday: 6, daysAfterToday: 6 })

  daysList.forEach(({ dayNumber, dayName }) => {
    const day = dayTemplate({ dayNumber, dayName, currentDay })
    weekContainer.appendChild(day)
  })

  return weekContainer
}

export function dayTemplate({ dayNumber, dayName, currentDay }) {
  const dayContainer = document.createElement('div')
  dayContainer.classList.add('day')

  if (currentDay === dayNumber) {
    dayContainer.classList.add('current-day')
  }

  const dayNameElement = document.createElement('span')
  dayNameElement.textContent = dayName
  dayContainer.appendChild(dayNameElement)

  const dayNumberElement = document.createElement('span')
  dayNumberElement.textContent = dayNumber
  dayContainer.appendChild(dayNumberElement)

  return dayContainer
}

