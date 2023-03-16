let antallTimer = 6;
let antallMinutter = 23;
let antallSekunder = 1234;


const timeToSek = (timer, min, sek) => (timer * 60 * 60) + (min * 60) + sek;


const totalSek = timeToSek(antallTimer, antallMinutter, antallSekunder)
console.log(totalSek);