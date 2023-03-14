var nedtrekkEl = document.getElementById("matvalg");
var utskriftEl = document.getElementById("utskrift");
var radioknapperListe = document.getElementsByClassName("radioknapper");

const checkBokserListe = document.querySelectorAll(".checkbokser");
const utskrift2 = document.getElementById("utskrift2");


var sliderEl = document.getElementById("slider")

sliderEl.addEventListener("change", endretVerdi)

for (var i = 0; i < radioknapperListe.length; i++) {
    radioknapperListe[i].addEventListener("change", endrerRadioKnapp);
}


nedtrekkEl.addEventListener('change', velgerFraNedtrekk);

function velgerFraNedtrekk(e) {

    const text = e.target.options[e.target.selectedIndex].text;
    const pris = e.target.options[e.target.selectedIndex].value;

    utskriftEl.innerHTML = `Du har valgt ${text} og det koster ${pris}`;

}

function endrerRadioKnapp(e) {
    console.log(e.target.value);
}

function utskriftCheckbokser(e) {


    const checkedBoxes = [...checkBokserListe].filter(box => box.checked);


    const checkedBoxes2 = [];
    checkBokserListe.forEach(box => {
        if (box.checked) {
            checkedBoxes2.push(box);
        }
    });


    if (checkedBoxes.length === 0) {
        utskrift2.innerHTML = `Du har ikke valgt noe`;
        return;
    }


    utskrift2.innerHTML = `du har valgt`;
    checkedBoxes.forEach(box => {
        utskrift2.innerHTML += ` og ${box.value}`;
    });

}

function endretVerdi(e) {
    console.log(e.target.value);
}