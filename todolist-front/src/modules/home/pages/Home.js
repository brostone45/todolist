import styles from './home.module.css'
import { Header } from '../components/header/header'
import { weekCalendar } from '../components/week-calendar/week-calendar'

export function Home({ app }) {
  const header = Header()
  const main = document.createElement('main')
  const weekSection = weekCalendar()

  const daystasksTitle = document.createElement('section')
  daystasksTitle.classList.add(styles['days-tasks'])
  daystasksTitle.innerHTML = `
    <h2>Today's tasks</h2>
    <button class="${styles['add-task']}">Add task</button>
  `

  main.append(weekSection, daystasksTitle)
  app.innerHTML = ''
  app.append(header, main)
}
