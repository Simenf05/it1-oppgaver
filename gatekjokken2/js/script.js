const matvalgEl = document.querySelector("#matvalg")
const tilbehorEl = document.querySelector("#tilbehor")
const slidersEl = document.querySelector("#sliders")
const skrivUtEl = document.querySelector("#skrivUt")
const checkBoxes = []

const matData = {
    polse: ["tomatsaus", "sennep"],
    hamburger: ["agurk", "salat", "tomatsaus"]
}


function valgtMatrett(e) {
    lageTilbehor(e.target.value)
}

function lageTilbehor(selected) {
    
    tilbehorEl.innerHTML  = ""
    checkBoxes.length = 0

    /* [...tilbehorEl.children].forEach(c => c.remove()) */

    matData[selected].forEach(mulighet => {
        
        const newDiv = document.createElement("div")
        const newBox = document.createElement("input")
        const newLabel = document.createElement("label")


        newBox.type = "checkbox"
        newBox.value = mulighet
        newBox.checked = true

        newLabel.htmlFor = mulighet
        newLabel.innerHTML = mulighet

        checkBoxes.push(newBox)

        newDiv.appendChild(newBox)
        newDiv.appendChild(newLabel)
        tilbehorEl.appendChild(newDiv)
    });

    
    const newButton = document.createElement("button")

    newButton.innerHTML = "Velg"
    newButton.onclick = confirmCheckboxes

    tilbehorEl.appendChild(newButton)
}

function confirmCheckboxes(e) {
    lageSliders(checkBoxes.map(box => box.checked))
}


function lageSliders(bools) {
    
    slidersEl.innerHTML = ""

    const sliders = matData[matvalgEl.value].filter((food, index) => bools[index])

    sliders.forEach(name => {
        const newDiv = document.createElement("div")
        const newSlider = document.createElement("input")
        const newLabel = document.createElement("label")

        newSlider.type = "range"
        newSlider.name = name
        newSlider.id = name

        newLabel.htmlFor = name
        newLabel.innerHTML = name

        newDiv.appendChild(newLabel)
        newDiv.appendChild(newSlider)
        slidersEl.appendChild(newDiv)
    })

    const newButton = document.createElement("button")

    newButton.innerHTML = "Skriv ut"
    newButton.onclick = skrivUt
    
    slidersEl.appendChild(newButton)


}


function skrivUt(e) {
    skrivUtEl.innerHTML = "halla"
}