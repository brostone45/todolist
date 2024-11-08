import { Login } from "../modules/auth/pages/login/Login";
import { SignUp } from "../modules/auth/pages/signup/signup";
import { Home } from "../modules/home/pages/Home";

export const routes = [
  {
    path: '/',
    page: 'home'
  },
  {
    path: 'signup',
    page: SignUp
  },
  {
    path: 'login',
    page: Login
  },
  {
    path: 'home',
    page: Home
  }
]
