import { Form } from '../../../shared/components/form/form'
import { Title } from '../../components/title/title'

import styles from './login.module.css'

const inputs = [
  {
    labelText: 'Email',
    name: 'email',
    placeholder: 'Email',
    type: 'email',
    validations: ['notEmpty', 'email'],
  },
  {
    labelText: 'Password',
    name: 'password',
    placeholder: 'Password',
    type: 'password',
    validations: ['notEmpty'],
  }
]

const navbarLinks = [
  {
    text: 'Sign up',
    href: 'signup'
  }
]

export function Login({ app }) {
  const nav = Navbar({ links: navbarLinks })

  const main = document.createElement('main')

  const container = document.createElement('section')
  container.classList.add(styles['login'])

  const titleSection = Title({
    titleText: 'Log in to your account',
    subtitleText: 'Enter your email and password to access your account.'
  })

  const formComponent = Form({ inputs, buttonText: 'Login', buttonType: 'submit' })

  formComponent.addEventListener('submit', (e) => {
    e.preventDefault()
    submitForm({ e, formInputs: inputs })
  }, false)

  container.appendChild(titleSection)
  container.appendChild(formComponent)

  return container
}

