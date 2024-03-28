
const imgRight = (image) => {
    let div = document.createElement("div")
    div.className = "sideR"
    div.innerHTML = `<img src="./images/${image}">

    `

    return div
}

export { imgRight }