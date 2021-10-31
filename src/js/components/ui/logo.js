import makeElement from "../../utils/makeElement.js";

const createLogo = function (elementType = 'img', className='logo' ){
    const template = `<div class="img-con"><img src="js/components/icons/wrench.png" alt="web app Logo" class="${className}"></img></div>`

    return template
}

export default createLogo