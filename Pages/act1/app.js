import { lefSide } from "./info.js"
import { imgRight } from "./img.js"


const datako = {
    title1      : "Adoption!!",
    title2      : "Give them a home!",
    para1       : "You can't buy love, but you can rescue it.",
    para2       : "There are not enough homes for all the animals that are born every year. Adopting from a shelter helps weaken the pet overpopulation cycle.",
    backBtn     : "Back",
    readBtn     : "Read More",
    moreBtn     : "View Adoption",
    nextBtn     : "Next",
    imageNako   : "dogs.jpg"
}

const { title1, title2, para1, para2, backBtn, readBtn, moreBtn, nextBtn, imageNako} = datako



let container = document.getElementById("container")

container.append(lefSide(title1, title2, para1, para2, backBtn, readBtn, moreBtn, nextBtn, imageNako))
container.append(imgRight(imageNako))