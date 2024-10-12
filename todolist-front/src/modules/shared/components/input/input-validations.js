import { handleInputWarning } from "../input-warning/input-warning"

export function validateInput({ input, validations }) {
  const validationStatus = inputValidations(input, validations)

  handleInputWarning(input, validationStatus)
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