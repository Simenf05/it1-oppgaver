
const randomTallArr = []

//a
const fillArr = (arr, addedNum) => [...arr, ...[...Array(addedNum)].map(x => Math.ceil(Math.random() * 100))];

//b
const arrMed50 = fillArr([], 50)

//c
arrMed50.sort((a, b) => b - a)

//d
const minstOgBiggest = (arr) => [arr.at(0), arr.at(-1)]

//e
const utenPartall = (arr) => arr.filter(x => !(x % 2 === 0))





