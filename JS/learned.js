const learns = (iconKnow, learned, li1, li2, li3, li4, li5, li6, li7) =>{
    let nuggets = document.createElement("div")
    nuggets.innerHTML = `<img src="../images/${iconKnow}">
                         <h1>${learned}</h1>
                         <ol><li>${li1}</li>
                         <li>${li2}</li>
                         <li>${li3}</li>
                         <li>${li4}</li>
                         <li>${li5}</li>
                         <li>${li6}</li>
                         <li>${li7}</li></ol>
    `
    return nuggets
}

const nolearns = (iconNot, nolearned, noli1, noli2) =>{
    let nogets = document.createElement("div")
    nogets.innerHTML = `<img src="../images/${iconNot}">
                         <h1>${nolearned}</h1>
                         <ol><li>${noli1}</li>
                         <li>${noli2}</li></ol>
    `
    return nogets
}

export {learns, nolearns}