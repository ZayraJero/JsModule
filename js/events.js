const filterKodersSelectAD = (arr) => {
    let order = document.getElementById('order__list').value
    let fakeArr = [...arr]
    let orderArray = fakeArr.sort()
    if (order === 'a') {
        return orderArray
    } else if (order === 'd') {
        return orderArray.reverse()
    } else {
        return fakeArr
    }
}
const filterKodersSelectAZ = (letter) => {
    let filtrados = kodersArr.filter((koder) => {
        return koder.toLowerCase().startsWith(letter.toLowerCase())
    })
    return filtrados
}
// spread operator
// let variableoriginal = [2,1,3]
// spread operator
// let otraVariable = [...variableoriginal]
// let otraVariable = []
// for(let i = 0; i< variableor.length; i++){
//     otraVariable.push(variableoriginal[i])
// }
const filterAZ = () => {
    let valorderad = document.getElementById('order__list').value
    let valorderaz = document.getElementById('orderletter').value
    let resultadoKoders = filterKodersSelectAD(kodersArr)
    console.log(resultadoKoders)
    let arrayKoders = filterKodersSelectAZ(valorderaz)
    console.log(arrayKoders)
    addElements('#lista', resultadoKoders.length, arrayKoders)
}


const kodersArr = ['Ale', 'ale2', 'alejandra', 'oscar', 'ruben', 'brian', 'brenda']
console.log('Hola Koders event')
// Exercise
const addElements = (selector, numberElements, arrNames) => {
    let listKoders = ''
    arrNames.forEach((koder, index) => {
        if (index < numberElements) {
            listKoders += `<li>Koder ${index + 1}: ${koder}</li>`
        }
    })
    document.querySelector(selector).innerHTML = listKoders
}

// Exercise filter
const filterKoders = (letter) => {
    let filtrados = kodersArr.filter((koder) => {
        return koder.toLowerCase().startsWith(letter.toLowerCase())
    })
    addElements('#lista', filtrados.length, filtrados)
}

