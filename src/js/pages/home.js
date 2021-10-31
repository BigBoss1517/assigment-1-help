import createHeader from "../components/ui/header.js";

const homePage = function(){
    createHeader

    const template = `
        <div class="home-button">
                <button type="button">to do app</button>
        </div>
    `
    
    const button = document.querySelector(".tagline")

    button.insertAdjacentHTML("afterend", template);

}

export default homePage()