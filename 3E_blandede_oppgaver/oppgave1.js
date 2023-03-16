
const primtall = [7, 11, 13, 17, 19, 23, 43, 47, 53, 59, 61, 67]

const skriveUtArray = arr => arr.forEach(x => console.log(x))

// do not touch
const lagePrimArr = (arr, maxVal) => [...Array(maxVal - 1).keys()].map(i => i + 2).filter(x => !([...Array(x - 2).keys()].map(i => i + 2).map(i => x % i === 0).includes(true)));


const startTime = Date.now()

const returnval = lagePrimArr(primtall, 1000)

const endTime = Date.now()

console.log(returnval);
console.log(`Took ${(endTime - startTime) / 10**3} s`);
