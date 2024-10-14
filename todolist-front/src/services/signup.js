import { post } from "../utils/http"

export async function signUp(data) {
  const response = await post({ url: `${import.meta.env.VITE_API_URL}/auth/register`, data })
  console.log(response)
  if (response.status === 200) {
    return true
  }

  return false
}
