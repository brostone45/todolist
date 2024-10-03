import styles from './signup.module.css'
import { Form } from '../../../shared/components/form/form'
import { Title } from '../../components/title/title'

const inputs = [
  {
    labelText: 'Name',
    placeholder: 'John Doe',
    type: 'text',
    validations: ['notEmpty'],
  },
  {
    labelText: 'Email',
    placeholder: 'your@email.com',
    type: 'email',
    validations: ['notEmpty', 'email'],
  },
  {
    labelText: 'Password',
    placeholder: '********',
    type: 'password',
    validations: ['notEmpty'],
  },
  {
    labelText: 'Confirm Password',
    placeholder: '********',
    type: 'password',
    validations: ['notEmpty'],
  },
]

export function SignUp() {
  const container = document.createElement('section')
  container.classList.add(styles['sign-up'])

  const titleSection = Title()
  const formComponent = Form({ inputs, buttonText: 'Sign Up', buttonType: 'submit' })
  formComponent.addEventListener('submit', () => { console.log('submit') }, false)

  container.appendChild(titleSection)
  container.appendChild(formComponent)

  return container
}
