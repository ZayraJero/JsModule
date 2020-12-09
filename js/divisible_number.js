const DIVISIBLE_NUMBER = prompt('Ingresa un número entre 1 y 100')

if (DIVISIBLE_NUMBER % 2 === 0 && DIVISIBLE_NUMBER % 11 === 0) {
    console.log(DIVISIBLE_NUMBER + ' es divisible entre 2 y 11')
} else if (DIVISIBLE_NUMBER % 2 === 0 && DIVISIBLE_NUMBER % 11 !== 0) {
    console.log(DIVISIBLE_NUMBER + ' es divisible entre 2 pero no de 11')
} else if (DIVISIBLE_NUMBER % 2 !== 0 && DIVISIBLE_NUMBER % 11 === 0) {
    console.log(DIVISIBLE_NUMBER + ' no es divisible entre 2 pero si de 11')
} else {
    console.log(DIVISIBLE_NUMBER + ' no es un número divisible entre 2 y 11')
}