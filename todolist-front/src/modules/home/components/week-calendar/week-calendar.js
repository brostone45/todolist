import styles from './week-calendar.module.css'
import { getCurrentDayNumber, getRageDate, getRangeAfterADay, getRangeBeforeADay } from "../../../shared/utils/date"

let daysBeforeToday = 6
let daysAfterToday = 6

export function weekCalendar() {
  const weekSection = document.createElement('section')
  weekSection.classList.add('week-calendar')

  const dayCalendar = dayCalendarTemplate()

  dayCalendar.addEventListener('scroll', (event) => {
    const scrollLeft = event.target.scrollLeft
    const scrollWidth = event.target.scrollWidth

    if (scrollLeft === 0) {
      const dateBefore = new Date()
      dateBefore.setDate(dateBefore.getDate() - daysBeforeToday)

      daysBeforeToday += 6

      const newDaysList = getRangeBeforeADay({
        daysBefore: 6, date: dateBefore
      })

      newDaysList.reverse()
      newDaysList.forEach((newDay) => {
        const day = dayTemplate(newDay)
        dayCalendar.prepend(day)
      })

      dayCalendar.scrollLeft = dayCalendar.scrollWidth - scrollWidth
    }

    if ((scrollLeft + event.target.clientWidth) + 15 >= scrollWidth) {
      const dateAfter = new Date()
      dateAfter.setDate(dateAfter.getDate() + daysAfterToday)

      daysAfterToday += 6

      const newDaysList = getRangeAfterADay({
        daysAfter: 6, date: dateAfter
      })

      newDaysList.forEach((newDay) => {
        const day = dayTemplate(newDay)
        dayCalendar.appendChild(day)
      })
    }
  })

  weekSection.appendChild(dayCalendar)

  return weekSection
}

export function dayCalendarTemplate() {
  const weekContainer = document.createElement('div')
  weekContainer.classList.add(styles.week)

  const daysList = getRageDate({ daysBeforeToday, daysAfterToday })

  daysList.forEach((newDay) => {
    const day = dayTemplate(newDay)
    weekContainer.appendChild(day)
  })

  // scroll to current day
  requestAnimationFrame(() => {
    const currentDayElement = weekContainer.querySelector(`.${styles['current-day']}`)
    if (currentDayElement) {
      currentDayElement.scrollIntoView({ behavior: 'smooth', inline: 'center' })
    }
  })

  return weekContainer
}

export function prependNewDays({ weekContainer }) {
}

export function appendNewDays() {
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

