import styles from './signup.module.css'
import { Form } from '../../../shared/components/form/form'
import { Title } from '../../components/title/title'
import { signUp } from '../../../../services/signup'
import { inputValidations } from '../../../shared/components/input/input-validations'
import { handleInputWarning } from '../../../shared/components/input-warning/input-warning'

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

export function SignUp() {
  const container = document.createElement('section')
  container.classList.add(styles['sign-up'])

  const titleSection = Title()
  const formComponent = Form({ inputs, buttonText: 'Sign Up', buttonType: 'submit' })
  formComponent.addEventListener('submit', (e) => {
    e.preventDefault()
    submitForm({ e, formInputs: inputs })
  }, false)

  container.appendChild(titleSection)
  container.appendChild(formComponent)

  return container
}

async function submitForm({e, formInputs}) {
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
