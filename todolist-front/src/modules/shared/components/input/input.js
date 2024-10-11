import styles from './input.module.css'

export function Input({ labelText, name, placeholder, type, validations }) {
  const container = document.createElement('div')
  container.className = styles['input-container']

  const label = generateLabelElement({ labelText })
  const input = generateInputElement({ placeholder, name, type, validations })

  container.appendChild(label)
  container.appendChild(input)

  return container
}

function generateLabelElement({ labelText }) {
  const label = document.createElement('label')
  label.className = 'input-label'
  label.textContent = labelText

  return label
}

function generateInputElement({ placeholder, name, type, validations = [] }) {
  const input = document.createElement('input')
  input.className = 'input'
  input.placeholder = placeholder
  input.name = name
  input.type = type
  
  if (type === 'email') {
    input.pattern = '^[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}$'
  }

  let inputChange = false

  input.addEventListener('change', (event) => {
    inputChange = true
    validateInput({ input: event.target, validations })
  })

  input.addEventListener('input', (event) => {
    if (inputChange) {
      validateInput({ input: event.target, validations })
    }
  })

  return input
}

function generateWarningElement({ warningText }) {
  const warning = document.createElement('p')
  warning.className = styles['input-warning']
  warning.textContent = warningText

  return warning
}

function validateInput({ input, validations }) {
  const validationStatus = inputValidations(input, validations)
  
  handleWarning(input, validationStatus)
}

export function handleWarning(input, validationStatus) {
  const hasWarning = input.parentElement.querySelector(`.${styles['input-warning']}`)
  let warningText = ''

  if (hasWarning && !validationStatus.empty && !validationStatus.invalidEmail) {
    hasWarning.remove()
    input.required = false
  }

  if (validationStatus.empty) {
    warningText = 'This field is required'
  } else if (validationStatus.invalidEmail) {
    warningText = 'Invalid email'
  }

  if (warningText !== '' && !hasWarning) {
    const warning = generateWarningElement({ warningText })
    input.parentElement.appendChild(warning)
    input.required = true
  }
}

export function inputValidations(input, validations) {
  const [notEmpty, email] = validations
  const isValid = {}
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  if (notEmpty) {
    isValid.empty = input.value.trim() === '' ? true : false
  }

  if (email) {
    isValid.invalidEmail = emailRegex.test(input.value) ? false : true
  }

  return isValid
}
