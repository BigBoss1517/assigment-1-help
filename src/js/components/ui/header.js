import createLogo from "./logo.js"
import createTagLine from "./tagline.js"

const createHeader = function(){
    const app = document.getElementById("app")
    const template = `<header class="app-heading"></header>`
    app.innerHTML = template

    const title = `<h1>Webtec</h1>`

    const heading = document.querySelector(".app-heading")

    heading.innerHTML = title

    heading.insertAdjacentHTML("beforebegin", createLogo())

    heading.insertAdjacentHTML("afterend", createTagLine())

}

export default createHeader