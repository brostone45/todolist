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

export function Login() {
  const container = document.createElement('section')
  container.classList.add(styles['login'])

  const titleSection = Title()
  const formComponent = Form({ inputs, buttonText: 'Login', buttonType: 'submit' })
  formComponent.addEventListener('submit', (e) => {
    e.preventDefault()
    submitForm({ e, formInputs: inputs })
  }, false)

  container.appendChild(titleSection)
  container.appendChild(formComponent)

  return container
}

