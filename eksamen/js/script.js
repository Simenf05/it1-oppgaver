const rootEl = document.getElementById("root")
const ferdigButtonEl = document.getElementById("ferdigButton")
const ferdigTekstEL = document.getElementById("ferdigTekst")
ferdigButtonEl.onclick = ferdigClick


const hytteCount = 3
const hytteList = []
const divList = []

import data from './data.json' assert { type: 'json' }


function defOpt() {
    const defaultOpt = document.createElement("option")
    defaultOpt.value = ""
    defaultOpt.disabled = true
    defaultOpt.selected = true
    defaultOpt.hidden = true
    defaultOpt.innerText = "Velg en hytte"
    return defaultOpt
}

function generateSelect(data, valgNum) {

    const newDiv = document.createElement("div")

    const newLabel = document.createElement("label")
    newLabel.htmlFor = `valg${valgNum}`
    newLabel.innerText = `Velg hytte nummer ${valgNum} her: `

    const newSelect = document.createElement("select")
    newSelect.name = `valg${valgNum}`
    newSelect.onchange = selectChange

    const defaultOpt = defOpt()
    newSelect.appendChild(defaultOpt)

    for (const dataKey in data) {
        const element = data[dataKey]
        if (element === null) continue

        const newOption = document.createElement("option")
        newOption.value = dataKey
        newOption.innerText = dataKey
        newSelect.appendChild(newOption)
    }

    divList.push(newDiv)
    hytteList.push(newSelect)
    newDiv.appendChild(newLabel)
    newDiv.appendChild(newSelect)
    rootEl.appendChild(newDiv)
}

function setUp(data) {

    const newDiv = document.createElement("div")

    const newLabel = document.createElement("label")
    newLabel.htmlFor = "valg1"
    newLabel.innerText = "Velg en start hytte: "

    const newSelect = document.createElement("select")
    newSelect.name = "valg1"
    newSelect.onchange = selectChange

    const defaultOpt = defOpt()
    newSelect.appendChild(defaultOpt)

    for (const dataKey in data) {
        const newOption = document.createElement("option")
        newOption.value = dataKey
        newOption.innerText = dataKey
        newSelect.appendChild(newOption)
    }

    divList.push(newDiv)
    hytteList.push(newSelect)
    newDiv.appendChild(newLabel)
    newDiv.appendChild(newSelect)
    rootEl.appendChild(newDiv)
}

function selectChange(e) {
    const index = hytteList.indexOf(e.target)

    if (!(index + 1 === hytteList.length)) {
        for (const divIndex in divList) {
            if (divIndex <= index) continue

            const element = divList[divIndex]
            element.remove()
        }

        hytteList.splice(index + 1)
        divList.splice(index + 1)

    }

    const newIndex = hytteList.indexOf(e.target)

    if (hytteList.length === hytteCount) return
    generateSelect(data[e.target.value], newIndex + 2)
}

function ferdigClick() {

    if (!(hytteList.length === hytteCount)) return

    ferdigTekstEL.innerText = hytteList.toString()

}

setUp(data)