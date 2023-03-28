import data from "../data.json" assert { type: "json"}

const swappingBox = document.getElementById("swappingBox")
const swapBtnArr = document.getElementsByClassName("swapBtn")
let shownBox = 0


function setSwappingBox(num) {

    swappingBox.innerHTML = ""

    const newH3 = document.createElement("h3")
    newH3.innerText = data[num].name
    swappingBox.appendChild(newH3)

    const newPEl = document.createElement("p")
    newPEl.innerText = data[num].info
    swappingBox.appendChild(newPEl)


    const newAEl = document.createElement("a")
    newAEl.href = data[num].url
    newAEl.innerText = "Les mer her"
    swappingBox.appendChild(newAEl)

}




function updateSwappingBox(e) {

    shownBox += Number(e.target.value)

    if (shownBox < 0) {
        shownBox = data.length - 1
    } else if (shownBox >= data.length) {
        shownBox = 0
    }
    setSwappingBox(shownBox)
}


function setUp(data) {

    for (const swapBtn of swapBtnArr) {
        swapBtn.onclick = updateSwappingBox
    }

    setSwappingBox(shownBox)
}


setUp(data)