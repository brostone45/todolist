import { Header } from '../components/header/header'

export function Home({ app }) {
  const header = Header()

  app.innerHTML = ''
  app.append(header)
}
