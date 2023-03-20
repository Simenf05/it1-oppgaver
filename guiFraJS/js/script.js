
const inputEl = document.getElementById("newFag")
const guiEl = document.getElementById("GUIOmraade")
const snittEl = document.getElementById("snitt")

const fag = ["Norsk", "Matte", "KRLE", "Kroppsøvning"];
const fagSliders = []
const checkBoxes = []
const gradesLabel = []

function leggTilFagIGUI(fagnavn) {

    const newDiv = document.createElement("div")

    const labelEl = document.createElement("label")
    labelEl.htmlFor = fagnavn
    labelEl.innerText = fagnavn
    newDiv.appendChild(labelEl)

    const checkedEl = document.createElement("input")
    checkedEl.type = "checkbox"
    checkedEl.onclick = checkClick
    checkBoxes.push(checkedEl)
    newDiv.appendChild(checkedEl)


    const sliderEl = document.createElement("input")
    sliderEl.type = "range"
    sliderEl.name = fagnavn
    sliderEl.min = "1"
    sliderEl.max = "6"
    sliderEl.onchange = changeGrade
    fagSliders.push(sliderEl)
    newDiv.appendChild(sliderEl)

    const gradeEl = document.createElement("label")
    gradeEl.htmlFor = fagnavn
    gradeEl.innerText = sliderEl.value
    gradesLabel.push(gradeEl)
    newDiv.appendChild(gradeEl)

    guiEl.appendChild(newDiv)

}


function changeGrade(e) {
    const index = fagSliders.indexOf(e.target)

    gradesLabel[index].innerText = e.target.value
}


function checkClick(e) {
    const index = checkBoxes.indexOf(e.target)

    fagSliders[index].disabled = !fagSliders[index].disabled


}


function leggTilFag() {
    if (inputEl.value === "") return
    leggTilFagIGUI(inputEl.value)
}



function beregnSnitt() {
    let sum = 0
    let count = 0

    for (let i = 0; i < fagSliders.length; i++) {
        if (fagSliders[i].disabled) continue
        sum += Number(fagSliders[i].value)
        count++
    }

    const average = sum / count

    snittEl.innerText = `Ditt snitt er ${average}`
}

for (let i = 0; i < fag.length; i++) {
    leggTilFagIGUI(fag[i])
}
