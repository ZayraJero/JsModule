function calculateDogAge(ageDog) {
    return ageDog * 7
}

function calcGeometry(radius) {
    return 2 * 3.1416 * radius
}

function calcArea(radius) {
    return 3.1416 * radius * radius
}

function temperatureConverter(num, grados) {
    return num * (9 / 5) + 32
}

function getFactorial(number) {
    return total
}

function temperatureConverter(grade, typeGrade) {
    if (typeGrade === 'C') {
        return (grade * 9) / 5 + 32
    } else {
        return ((grade - 32) * 5) / 9
    }
}

function temperatureConverter(grade, typeGrade) {
    typeGrade === 'C' ? (grade * 9) / 5 + 32 : ((grade - 32) * 5) / 9
}

function getFactorial(number) {
    let total = 1
    for (let i = 1; i <= number; i++) {
        total *= i
    }
    return total
}
