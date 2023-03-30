import data from "../data.json" assert { type: "json"}

const bildeDivEl = document.getElementById("bilde")
const bildeBtnArr = document.getElementsByClassName("swapBilde")
let bildePos = 0

const swappingBox = document.getElementById("swappingBox")
const swapBtnArr = document.getElementsByClassName("swapBtn")
let shownBox = 0


const steder = data.steder
const bilder = data.bilder

function setSwappingBox(num) {

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

    shownBox += Number(e.target.value)

    if (shownBox < 0) {
        shownBox = steder.length - 1
    } else if (shownBox >= steder.length) {
        shownBox = 0
    }
    setSwappingBox(shownBox)
}




function nextBilde(pos) {
    const imgEl = document.createElement("img")
    imgEl.src = `./img/${bilder[pos]}`
    return imgEl
}

function swapBilde(increment) {

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


function setUp() {

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