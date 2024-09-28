import styles from './title.module.css'

export function Title() {
  const container = document.createElement('div')
  container.className = styles['title-section']

  const title = document.createElement('h1')
  title.textContent = 'Create an account'
  title.className = 'title'

  const subtitle = document.createElement('p')
  subtitle.textContent = 'Create your account by entering your details below or sign up with your preferred social network.'
  subtitle.className = 'subtitle'

  container.appendChild(title)
  container.appendChild(subtitle)

  return container
}