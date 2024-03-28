const footer = (iconlink1, icon1, iconlink2, icon2) =>{
    let foo = document.createElement("ul")
    foo.innerHTML = `<li><a href="${iconlink1}">
                     <img src="./images/${icon1}"></a></li>
                     <li><a href="${iconlink2}">
                     <img src="./images/${icon2}"></a></li>
    `
    return foo
}

export {footer}