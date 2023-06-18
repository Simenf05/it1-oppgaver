import data from "../data.json" assert { type: "json"}

const bildeDivEl = document.getElementById("bilde")
const bildeBtnArr = document.getElementsByClassName("swapBilde")
let bildePos = 0

const swappingBox = document.getElementById("swappingBox")
const swapBtnArr = document.getElementsByClassName("swapBtn")
let shownBox = 0

// assign the json data
const steder = data.steder
const bilder = data.bilder


function setSwappingBox(num) {
    // sets the content of the box that can swap its content

    swappingBox.innerHTML = ""

    const newH3 = document.createElement("h3")
    newH3.innerText = steder[num].name
    swappingBox.appendChild(newH3)

    const newPEl = document.createElement("p")
    newPEl.innerText = steder[num].info
    swappingBox.appendChild(newPEl)


    const newAEl = document.createElement("a")
    newAEl.href = steder[num].url
    newAEl.innerText = "Les mer her"
    swappingBox.appendChild(newAEl)

}


function updateSwappingBox(e) {
    // function used to update the box that swaps 

    shownBox += Number(e.target.value)

    if (shownBox < 0) {
        shownBox = steder.length - 1
    } else if (shownBox >= steder.length) {
        shownBox = 0
    }
    setSwappingBox(shownBox)
}



function nextBilde(pos) {
    // generates a new img tag with the right src

    const imgEl = document.createElement("img")
    imgEl.src = `./img/${bilder[pos]}`
    return imgEl
}


function swapBilde(increment) {
    //changes the increments img pos and appends new img

    bildePos += Number(increment)

    if (bildePos < 0) {
        bildePos = bilder.length - 1
    } else if (bildePos >= bilder.length) {
        bildePos = 0
    }

    bildeDivEl.innerHTML = ""
    bildeDivEl.appendChild(nextBilde(bildePos))
}


const buttonOnclick = (e) => swapBilde(e.target.value)
// onclick for html



function setUp() {
    // sets up the website

    for (const swapBtn of swapBtnArr) {
        swapBtn.onclick = updateSwappingBox
    }

    for (const bildeBtn of bildeBtnArr) {
        bildeBtn.onclick = buttonOnclick
    }

    setSwappingBox(shownBox)
    swapBilde(0)
}


setUp()