import { Header } from '../components/header/header'
import { weekCalendar } from '../components/week-calendar/week-calendar'

export function Home({ app }) {
  const header = Header()
  const weekSection = weekCalendar()

  app.innerHTML = ''
  app.append(header, weekSection)
}
