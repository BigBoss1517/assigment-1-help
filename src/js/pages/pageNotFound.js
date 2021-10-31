import createHeader from "../components/ui/header.js";

const pageNotFound = function(){
    createHeader()
    const error = document.querySelector(".tagline")
    const errorlogo = `<div class="error-img">
    <img src="js/components/icons/404.png" alt="page not found image">
     </div>`
    error.insertAdjacentHTML("afterend", errorlogo)

    const message = `<p class="error-message">The page you are looking for unfortunetely does not exist</p>`

    const messagePlacement = document.querySelector(".error-img")

    messagePlacement.insertAdjacentHTML("afterend", message)

    const button = `
        <div class="return-button">
                <button type="button">Take Me Back</button>
        </div>
    `

    const buttonPlacemnt = document.querySelector(".error-message")
    buttonPlacemnt.insertAdjacentHTML("afterend", button)

}

export default pageNotFound()