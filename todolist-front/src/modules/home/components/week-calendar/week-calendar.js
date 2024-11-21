import styles from './week-calendar.module.css'
import { getCurrentDayNumber, getRageDate } from "../../../shared/utils/date"

export function weekCalendar() {
  const currentDay = getCurrentDayNumber()
  const weekSection = document.createElement('section')
  weekSection.classList.add('week-calendar')

  let daysBeforeToday = 6
  let daysAfterToday = 6

  const weekContainer = document.createElement('div')
  weekContainer.classList.add(styles.week)

  const daysList = getRageDate({ daysBeforeToday, daysAfterToday })

  daysList.forEach((newDay) => {
    const day = dayTemplate(newDay)
    weekContainer.appendChild(day)
  })

  weekContainer.addEventListener('scroll', (event) => {
    const scrollLeft = event.target.scrollLeft
    const scrollWidth = event.target.scrollWidth

    if (scrollLeft === 0) {
      daysBeforeToday += 3

      const newDaysList = getRageDate({ daysBeforeToday, daysAfterToday })
      weekContainer.innerHTML = ''

      newDaysList.forEach((newDay) => {
        const day = dayTemplate(newDay)
        weekContainer.appendChild(day)
      })

      weekContainer.scrollLeft = weekContainer.scrollWidth - scrollWidth
    }

    if ((scrollLeft + event.target.clientWidth) + 15 >= scrollWidth) {
      daysAfterToday += 3

      const newDaysList = getRageDate({ daysBeforeToday, daysAfterToday })
      weekContainer.innerHTML = ''

      newDaysList.forEach((newDay) => {
        const day = dayTemplate(newDay)
        weekContainer.appendChild(day)
      })
    }
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

export function dayTemplate({ dayNumber, dayName, isCurrentDay }) {
  const dayContainer = document.createElement('div')
  dayContainer.classList.add(styles.day)

  if (isCurrentDay) {
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

