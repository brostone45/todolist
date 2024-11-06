import styles from './title.module.css'

export function Title({ titleText, subtitleText }) {
  const container = document.createElement('div')
  container.className = styles['title-section']

  const title = document.createElement('h1')
  title.textContent = titleText
  title.className = 'title'

  const subtitle = document.createElement('p')
  subtitle.textContent = subtitleText
  subtitle.className = 'subtitle'

  container.appendChild(title)
  container.appendChild(subtitle)

  return container
}
