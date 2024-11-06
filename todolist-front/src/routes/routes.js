import { Login } from "../modules/auth/pages/login/Login";
import { SignUp } from "../modules/auth/pages/signup/signup";

export const routes = [
  {
    path: '/',
    component: 'home'
  },
  {
    path: 'signup',
    component: SignUp
  },
  {
    path: 'login',
    component: Login
  }
]
