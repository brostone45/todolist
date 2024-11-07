import { routes } from "./routes"

const app = document.getElementById('app')

export function router() {
  const currentRoute = getCurrentRoute()

  const route = routes.find(route => route.path === currentRoute)

  if (!route) {
    location.pathname = '/'
  }

  const component = route.page({ app })
}

function getCurrentRoute() {
  const currentPath = location.pathname

  if (currentPath !== '/') {
    return currentPath
  }

  const currentHash = location.hash.split('#/')[1] || '/'
  return currentHash
}
