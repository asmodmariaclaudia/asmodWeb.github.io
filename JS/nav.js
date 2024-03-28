const navi = (home, learn, act1, act2) => {
    let nav = document.createElement("ul")
    nav.innerHTML = `<li><a href="${home}">Homepage</a></li>
                     <li><a href="./Pages/${learn}">What I learned</a></li>
                     <li><a href="./Pages/act1/${act1}">Activity 1</a></li>
                     <li><a href="./Pages/act2/${act2}">Activity 2</a></li>
    `
    return nav
}

const navi2 = (home, learn, act1, act2) => {
    let nav2 = document.createElement("ul")
    nav2.innerHTML = `<li><a href="../${home}">Homepage</a></li>
                     <li><a href="./Pages/${learn}">What I learned</a></li>
                     <li><a href="./act1/${act1}">Activity 1</a></li>
                     <li><a href="./act2/${act2}">Activity 2</a></li>
    `
    return nav2
}

export { navi, navi2 }