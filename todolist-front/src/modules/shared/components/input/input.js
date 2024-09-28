import styles from './input.module.css'

export function Input({ labelText, placeholder, type }) {
  const container = document.createElement('div')
  container.className = styles['input-container']

  const label = generateLabelElement({ labelText })
  const input = generateInputElement({ placeholder, type })

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

function generateInputElement({ placeholder, type }) {
  const input = document.createElement('input')
  input.className = 'input'
  input.placeholder = placeholder
  input.type = type

  return input
}