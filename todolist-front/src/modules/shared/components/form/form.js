import { Input } from "../input/input"
import { Button } from "../button/button"

export function Form({ inputs, buttonText }) {
  const form = document.createElement('form')
  form.className = 'form'

  inputs.forEach(input => {
    const inputComponent = Input(input)
    form.appendChild(inputComponent)
  })

  const buttonComponent = Button({ text: buttonText })
  form.appendChild(buttonComponent)

  return form
}