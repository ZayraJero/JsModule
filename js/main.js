//FOR EACH
const arrayCitys = ['cdmx', 'Monterrey', 'Guadalajara']
//funcion normal
arrayCitys.forEach(function (currentElement, index, arrayOriginal) {

    if (currentElement.startsWith('c') || currentElement.startsWith('c')) {
        console.log(index, currentElement, arrayOriginal)
    }

});

// for(let i = 0; i < arrayCitys.length; i++) {
//     console.log(arrayCitys[i])
// }

//arrow function
arrayCitys.forEach((currentElement, index, arrayOriginal) => {

    if (currentElement.startsWith('c') || currentElement.startsWith('c')) {
        console.log(index, currentElement, arrayOriginal)
    }

});

//MAP
//arr.map recibe un callback
[1, 20, 50].map(function (currentValue, index, arr) {
    return currentValue * 2
})

[1, 20, 50].map(currentValue => {
    return currentValue * 2
})

[1, 20, 50].map(currentValue => currentValue * 2)

const doubleValuesMap = (arr) => {
    const resultArray = arr.map(currentValue => {
        currentValue * 2
    })
    return resultArray
}

const doubleValuesMap = (arr) => {
    const resultArray = arr.map(currentValue => currentValue * 2)
    return resultArray
}

const doubleValuesMap = (arr) => {
    return arr.map(currentValue => currentValue * 2)
}

const doubleValuesMap = (arr) => arr.map(currentValue => currentValue * 2)
console.log(doubleValuesMap([1, 2, 3, 4]))