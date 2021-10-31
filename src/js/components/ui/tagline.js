const createTagLine = function(elementType='p', className="tagline"){
    const template = `<${elementType} class="${className}">Admin Task Managing Interface</${elementType}>`

    return template
}

export default createTagLine