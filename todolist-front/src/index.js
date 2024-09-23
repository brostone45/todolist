import { router } from "./routes"

window.addEventListener(
  'DOMContentLoaded',
  () => {
    window.history.pushState({ loadUrl: window.location.href }, null, '');
  },
  false
);
window.addEventListener('load', router, false)
window.addEventListener('hashchange', router, false)