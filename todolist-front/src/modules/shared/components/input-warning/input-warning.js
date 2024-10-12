import styles from './input-warning.module.css'

export function generateInputWarningElement({ warningText }) {
  const warning = document.createElement('p')
  warning.className = styles['input-warning']
  warning.textContent = warningText

  return warning
}

export function handleInputWarning(input, validationStatus) {
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
    const warning = generateInputWarningElement({ warningText })
    input.parentElement.appendChild(warning)
    input.required = true
  }
}