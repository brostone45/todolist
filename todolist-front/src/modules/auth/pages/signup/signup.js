export function SignUp() {
  const container = document.createElement('div')

  const title = `<h1>Sign Up</h1>`
  const form = `
    <form>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button>Sign Up</button>
    </form>
  `
  
  container.innerHTML = title
  container.innerHTML += form

  return container
}