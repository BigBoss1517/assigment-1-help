import homePage from "../pages/home.js";
import toDoPage from "../pages/todos.js";
 import pageNotFound from "../pages/pageNotFound.js"

 const routes = {
     '/':homePage(),
     '/todos':toDoPage()
 }
const router = function(pathname){
    const app = document.querySelector('#app')
    app.innerHTML = ' '

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )

    app.appendChild(routes[window.location.pathname])
}

export {routes}
export default router()