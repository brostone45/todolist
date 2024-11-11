import { getFormattedDate } from '../../../shared/utils/date'
import './header.module.css'

export function Header() {
  const currentDate = getFormattedDate()

  const header = document.createElement('header')
  header.innerHTML = `
    <div>
      <h2>Hey, Steve</h2>
      <p>${currentDate}</p>
    </div>

    <picture>
      <img src="https://yesiddn.me/assets/img/profile.jpg" alt="Profile picture" />
    </picture>
  `
  return header
}

