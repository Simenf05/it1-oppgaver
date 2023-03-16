
const testArr = [1, 2, 3]

function reverse(arr) {
    const newArr = []

    for (let i = arr.length - 1; i > -1; i--) newArr.push(arr[i])

    return newArr;
}

console.log(reverse(testArr));