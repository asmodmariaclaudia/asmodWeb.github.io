const div = (intro, span, intro2, title, para) =>{
    let div = document.createElement("div")
    div.innerHTML = `<h4>${intro} <span class="span">${span}</span> ${intro2} </h4>
                     <h1>${title}</h1>
                     <p>${para}</p>
    `
    return div
}

export {div}