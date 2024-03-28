import {learns, nolearns} from "./learned.js"
import { navi2 } from "./nav.js"

// what i learned display
const navigation = {
    home    : "index.html",
    learn   : "learned.html",
    act1    : "main.html",
    act2    : "index.html"
}

const learn1 = {
    iconKnow : "knowledge.png",
    learned  : "Lessons Understood:",
    li1      : "Variables (let, const, & var)",
    li2      : "Deconstructing",
    li3      : "Objects",
    li4      : "Functions",
    li5      : "Imports",
    li6      : "Exports",
    li7      : "Arrow Functions",
}

const notLearn = {
    iconNot    : "confusion.png",
    nolearned  : "Lessons I'm still confused:",
    noli1      : "Arrays",
    noli2      : "String Search"
}

const {home, learn, act1, act2} = navigation
const {iconKnow, learned, li1, li2, li3, li4, li5, li6, li7} = learn1
const {iconNot, nolearned, noli1, noli2} = notLearn

// learned
let nav2 = document.getElementById("nav2")
let gets = document.getElementById("gets")
let getsno = document.getElementById("getsno")

nav2.append(navi2(home, learn, act1, act2))
gets.append(learns(iconKnow, learned, li1, li2, li3, li4, li5, li6, li7))
getsno.append(nolearns(iconNot, nolearned, noli1, noli2))
