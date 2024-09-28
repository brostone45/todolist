import styles from './signup.module.css'
import { generateInputComponent } from "../../../../shared/components/input/input"
import { Button } from '../../../../shared/components/button/button'

const inputs = [
  {
    labelText: 'Name',
    placeholder: 'John Doe',
    type: 'text',
  },
  {
    labelText: 'Email',
    placeholder: 'your@email.com',
    type: 'email',
  },
  {
    labelText: 'Password',
    placeholder: '********',
    type: 'password',
  },
  {
    labelText: 'Confirm Password',
    placeholder: '********',
    type: 'password',
  },
]

export function SignUp() {
  const container = document.createElement('section')

  const titleSection = generateTitleSectionElement()
  const form = generateFormComponent(inputs)

  container.appendChild(titleSection)
  container.appendChild(form)

  return container
}

function generateTitleSectionElement() {
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

function generateFormComponent(inputs) {
  const form = document.createElement('form')
  form.className = 'form'

  inputs.forEach(input => {
    const inputComponent = generateInputComponent(input)
    form.appendChild(inputComponent)
  })

  const buttonComponent = Button({ text: 'Sign Up' })
  form.appendChild(buttonComponent)

  return form
}

