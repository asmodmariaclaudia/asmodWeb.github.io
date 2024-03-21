
const lefSide = (title1, title2, para1, para2, backBtn, readBtn, moreBtn, nextBtn) => {
    let div = document.createElement("div")
    div.className = "sideL"
    div.innerHTML = `<h1>${title1}</h1>
                    <h1>${title2}</h1>
                    <p>${para1}</p>
                    <p>${para2}</p>
                    <button>${backBtn}</button>
                    <button>${readBtn}</button>
                    <button>${moreBtn}</button>
                    <button>${nextBtn}</button>
    `

    return div
}

export { lefSide }