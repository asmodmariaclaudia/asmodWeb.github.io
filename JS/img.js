const profile = (prof) => {
    let div2 = document.createElement("div")
    div2.innerHTML = `<img src="./images/${prof}">
    `

    return div2
}

export { profile }