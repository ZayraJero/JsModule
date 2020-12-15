const calculateDogAge = ageDog => ageDog * 7

const calcGeometry = radius => 2 * 3.1416 * radius

const calcArea = radius => 3.1416 * radius * radius

const temperatureConverter = (num, grados) => num * (9 / 5) + 32

const getFactorial = (number) => total

const temperatureConverter = (grade, typeGrade) => {
    if (typeGrade === 'C') {
        return (grade * 9) / 5 + 32
    } else {
        return ((grade - 32) * 5) / 9
    }
}

const temperatureConverter = (grade, typeGrade) => {
    typeGrade === 'C' ? (grade * 9) / 5 + 32 : ((grade - 32) * 5) / 9
}

const getFactorial = number => {
    let total = 1
    for (let i = 1; i <= number; i++) {
        total *= i
    }
    return total
}
//se invoca la función
const resultGetFactorial = getFactorial(3)
//se imprime la función
console.log(resultGetFactorial)

//return console

const calArea = radius => {
    return Math.PI * radius * radius
}

const resultCalArea = calArea(10)
console.log(resultCalArea)