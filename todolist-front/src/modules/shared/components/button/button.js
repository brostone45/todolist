import styles from './button.module.css'

export function Button({ text, type }) {
  const button = document.createElement('button')
  button.className = styles.button
  button.textContent = text
  button.type = type || 'button'

  return button
} 