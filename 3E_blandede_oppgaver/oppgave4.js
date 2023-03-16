

//oppgave 2
const fillArr = (arr, addedNum) => [...arr, ...[...Array(addedNum)].map(x => Math.ceil(Math.random() * 100))];


function duplicates(arr) {
    const newArr = []
    arr.sort((a, b) => a - b)
    arr.forEach((num, i) => {
        if (!(num === arr[i + 1])) return;
        if (newArr.includes(num)) return;
        newArr.push(num)
    });
    return newArr
}


const arrWith500 = fillArr([], 500)
const val = duplicates(arrWith500)

console.log(val)