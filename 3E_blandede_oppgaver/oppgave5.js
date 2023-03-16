

const helTall = endNum => [...Array(endNum).keys()].map(x => x + 1)


const arr10Heltall = helTall(10)


const randomIntInRange = max => Math.floor(Math.random() * max)

function trekkTall(arr, antallTekking) {

    if (antallTekking > arr.length) throw Error("ei du kan ikke do that")

    const origin = [...arr]
    const trekkesFra = [...arr]
    const trukket = []
    
    for (let i = 0; i < antallTekking; i++) {
        
        const index = randomIntInRange(trekkesFra.length)
        trukket.push(trekkesFra[index])
        trekkesFra.splice(index, 1)
        
    }

    return {
        origin: origin,
        leftOver: trekkesFra,
        trukket: trukket,
    }
}


const val = trekkTall(arr10Heltall, -5)
console.log(val)
