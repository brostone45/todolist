import { validateInput } from './input-validations'
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
