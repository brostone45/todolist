import { routes } from "./routes"

export function router() {
  const currentRoute = getCurrentRoute()

  const route = routes.find(route => route.path === currentRoute)
  
  if (!route) {
    location.pathname = '/'
  } 
}

function getCurrentRoute() {
  const currentPath = location.pathname

  if (currentPath !== '/') {
    return currentPath
  }

  const currentHash = location.hash.split('#/')[1] || '/'
  return currentHash
}