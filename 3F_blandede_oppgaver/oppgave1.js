let informasjonsteknologi1 = {
    spraak: ["HTML", "CSS"],
    likerFaget: false,
    timetall: 5,
    klasserom: "C14",
    antallElever: 24
};


//a
informasjonsteknologi1.spraak.push("Javascript")

//b
informasjonsteknologi1.antallElever = 14

//c
informasjonsteknologi1.likerFaget = true

//d
delete informasjonsteknologi1.timetall

//e
for (const fag of informasjonsteknologi1.spraak) {
    console.log(fag)
}

//f
for (const i in informasjonsteknologi1) {
    console.log(i)
}

//g
for (const i in informasjonsteknologi1) {
    console.log(informasjonsteknologi1[i])
}
