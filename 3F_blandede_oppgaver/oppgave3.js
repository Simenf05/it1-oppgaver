let figur1 = {
    form: "rektangel",
    lengde: 4,
    bredde: 6,
    areal: 24,
    omkrets: 20
};

//a
for (const figur1Key in figur1) {
    console.log(figur1Key)
}

//b
//c
figur1.egenskaper = function () {
    for (const egenskaper in this) {
        console.log(`${egenskaper}: ${this[egenskaper]}`)
    }
}

//d
figur1.antallEgenskaper = function () {
    return Object.keys(this).length
}

figur1.egenskaper()

console.log(figur1.antallEgenskaper())

let figur2 = {
    form: "rektangel",
    lengde: 4,
    bredde: 6,
    areal: 24,
    omkrets: 20
};

let figur3 = {
    form: "rektangel",
    lengde: 9,
    bredde: 1,
    omkrets: 20
};

let figur4 = {
    form: "kvadrat",
    lengde: 3,
    bredde: 6,

};

let figur5 = {
    form: "kvadrat",
    lengde: 6,
    bredde: 6
};


function checkObj(obj1, obj2) {

    if (!(Object.keys(obj1).length === Object.keys(obj2).length)) return false

    for (const obj1Key in obj1) {
        let exists = false

        for (const obj2Key in obj2) {
            if (!(obj1Key === obj2Key)) continue

            exists = true
        }

        if (!(exists)) return false

    }

    for (const obj1Key in obj1) {
        const element = obj1[obj1Key]

        let exists = false

        for (const obj2Key in obj2) {
            const element2 = obj2[obj2Key]

            if (!(element === element2)) return false

            exists = true

        }

    }

    return true

}


console.log(checkObj(figur5, figur4))