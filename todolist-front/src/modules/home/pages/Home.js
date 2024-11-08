import styles from './home.module.css'

export function Home({ app }) {
  const header = document.createElement('header')
  header.innerHTML = `
    <div>
      <h2>Hey, Steve</h2>
      <p>Wednesday, November 9</p>
    </div>

    <picture>
      <img src="https://yesiddn.me/assets/img/profile.jpg" alt="Profile picture" />
    </picture>
  `

  app.innerHTML = ''
  app.append(header)
}
