import styles from './button.module.css'

export function generateButtonComponent({ text }) {
  const button = document.createElement('button')
  button.className = styles.button
  button.textContent = text

  return button
} 