import { navi } from "./nav.js"
import { div } from "./info.js"
import { footer } from "./footer.js"
import { profile } from "./img.js"

// homepage display
const navigation = {
    home    : "index.html",
    learn   : "learned.html",
    act1    : "main.html",
    act2    : "index.html"
}

const divi1 = {
    intro    : "Hi! I'm",
    span     : "Maria Claudia A. Asmod",
    intro2   : "a BSIT - 2nd Year GCC Student",
    title    : "MY COMPILATION OF ACTIVITIES",
    para     : "Compilation of my JavaScript activities done in the subject of PF 102: Event Driven Programming",
    prof     : "catComp3.gif"
}

const footie = {
    icon1    : "github2.png",
    icon2    : "facebook.png",
    iconlink1: "https://github.com/asmodmariaclaudia",
    iconlink2: "https://www.facebook.com/profile.php?id=100069247330989"
}

//Deconstructing
const {home, learn, act1, act2} = navigation
const {intro, span, intro2, title, para, prof} = divi1
const {iconlink1, icon1, iconlink2, icon2} = footie

// get ids
// homepage
let nav = document.getElementById("nav")
let div1 = document.getElementById("div1")
let div2 = document.getElementById("div2")
let foot = document.getElementById("foot")


// appending na
nav.append(navi(home, learn, act1, act2))
div1.append(div(intro, span, intro2, title, para))
div2.append(profile(prof))
foot.append(footer(iconlink1, icon1, iconlink2, icon2))