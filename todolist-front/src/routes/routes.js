import { SignUp } from "../modules/auth/pages/signup/signup";

export const routes = [
  {
    path: '/',
    component: 'home'
  },
  {
    path: 'login',
    component: SignUp
  }
]