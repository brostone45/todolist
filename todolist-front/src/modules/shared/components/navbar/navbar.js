import styles from './navbar.module.css'

export function Navbar({ links }) {
  const navbar = document.createElement('nav')

  const logo = document.createElement('a')
  logo.classList.add('navbar-logo')

  const ul = document.createElement('ul')
  ul.classList.add('navbar-list')

  links.forEach((link) => {
    const li = document.createElement('li')
    li.classList.add('navbar-item')

    const a = document.createElement('a')
    a.classList.add('navbar-link')
    a.href = `/#/${link.href}`
    a.textContent = link.text
    li.appendChild(a)
    ul.appendChild(li)
  })

  navbar.append(logo, ul)

  return navbar
}
