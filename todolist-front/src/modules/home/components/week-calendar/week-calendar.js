import styles from './week-calendar.module.css'
import { getCurrentDayNumber, getRageDate } from "../../../shared/utils/date"

export function weekCalendar() {
  const currentDay = getCurrentDayNumber()
  const weekSection = document.createElement('section')
  weekSection.classList.add('week-calendar')

  const daysBeforeToday = 3
  const daysAfterToday = 3

  const weekContainer = document.createElement('div')
  weekContainer.classList.add(styles.week)

  const daysList = getRageDate({ daysBeforeToday, daysAfterToday })

  daysList.forEach(({ dayNumber, dayName }) => {
    const day = dayTemplate({ dayNumber, dayName, currentDay })
    weekContainer.appendChild(day)
  })

  weekSection.appendChild(weekContainer)

  // scroll to current day
  setTimeout(() => {
    const currentDayElement = weekContainer.querySelector(`.${styles['current-day']}`)
    if (currentDayElement) {
      currentDayElement.scrollIntoView({ behavior: 'smooth', inline: 'center' })
    }
  }, 0)

  return weekSection
}

export function dayTemplate({ dayNumber, dayName, currentDay }) {
  const dayContainer = document.createElement('div')
  dayContainer.classList.add(styles.day)

  if (currentDay === dayNumber) {
    dayContainer.classList.add(styles['current-day'])
  }

  const dayNameElement = document.createElement('span')
  dayNameElement.classList.add(styles['day-name'])
  dayNameElement.textContent = dayName
  dayContainer.appendChild(dayNameElement)

  const dayNumberElement = document.createElement('span')
  dayNumberElement.classList.add(styles['day-number'])
  dayNumberElement.textContent = dayNumber
  dayContainer.appendChild(dayNumberElement)

  return dayContainer
}

