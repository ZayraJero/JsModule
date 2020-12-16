//tabla de multiplicar

const arraySumNumber = [1, 2, 3, 4]

arraySumNumber.forEach(currentTable => {
    for (let i = 1; i <= 10; i++) {
        // console.log(`${currentTable} x ${i} = ${currentTable * i}`)
    }
});

//[1, 2, 3] [2, 4, 6]
const doubleNumber = arrNumber => {

    let arrayNew = []
    arrNumber.forEach(currentValue => {
        arrayNew.push(currentValue * 2)
    })
    return arrayNew
}
let numArray = [1, 2, 3]
const result = doubleNumber(numArray)
console.log(result)

// console.log(doubleNumber([1, 2, 3]))


//[1, 2, 3, 4] [2, 4]

const pairNumber = numberArray => {
    let newArray = []

    numberArray.forEach(item => {
        if (item % 2 === 0) {
            newArray.push(item)
        }
    })
    return newArray
}


//['hola', 'mundo'] ['ha', 'mo']

const startEnd = strArray => {
    let strNew = []

    strArray.forEach(item => {
        strNew.push(item.slice(0, 1) + item.slice(-1))
    })
    return strNew
}