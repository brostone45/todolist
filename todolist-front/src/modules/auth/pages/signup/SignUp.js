import styles from './signup.module.css'
import { Form } from '../../../shared/components/form/form'
import { Title } from '../../components/title/title'
import { signUp } from '../../../../services/signup'
import { inputValidations } from '../../../shared/components/input/input-validations'
import { handleInputWarning } from '../../../shared/components/input-warning/input-warning'
import { Navbar } from '../../../shared/components/navbar/navbar'

const inputs = [
  {
    labelText: 'Name',
    name: 'name',
    placeholder: 'John Doe',
    type: 'text',
    validations: ['notEmpty'],
  },
  {
    labelText: 'Email',
    name: 'email',
    placeholder: 'your@email.com',
    type: 'email',
    validations: ['notEmpty', 'email'],
  },
  {
    labelText: 'Password',
    name: 'password',
    placeholder: '********',
    type: 'password',
    validations: ['notEmpty'],
  },
  {
    labelText: 'Confirm Password',
    name: 'confirmPassword',
    placeholder: '********',
    type: 'password',
    validations: ['notEmpty'],
  },
]

const navbarLinks = [
  {
    text: 'Log in',
    href: 'login'
  }
]

export function SignUp({ app }) {
  const nav = Navbar({ links: navbarLinks })

  const main = document.createElement('main')

  const container = document.createElement('section')
  container.classList.add(styles['sign-up'])

  const titleSection = Title({
    titleText: 'Create an account',
    subtitleText: 'Create your account by entering your details below or sign up with your preferred social network.'
  })
  const formComponent = Form({ inputs, buttonText: 'Sign Up', buttonType: 'submit' })
  formComponent.addEventListener('submit', (e) => {
    e.preventDefault()
    submitForm({ e, formInputs: inputs })
  }, false)

  container.append(titleSection, formComponent)
  main.appendChild(container)

  app.innerHTML = ''
  app.append(nav, container)
}

async function submitForm({ e, formInputs }) {
  const formComponent = e.target
  const formValues = {}

  const inputs = formComponent.querySelectorAll('input')
  inputs.forEach(input => {
    const validations = formInputs.find(formInput => formInput.name === input.name).validations
    const isValid = inputValidations(input, validations)
    handleInputWarning(input, isValid)

    if (!isValid.empty && !isValid.invalidEmail) {
      formValues[input.name] = input.value
    }
  })

  if (Object.keys(formValues).length === formInputs.length) {
    const signupStatus = await signUp(formValues)
    console.log(signupStatus)
  }
}
