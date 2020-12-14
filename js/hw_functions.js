/**
 * Escribir una función que calcule la edad de un perro en años caninos.
 * La función debe recibir el nombre y la edad del perro en años humanos
 * convertirlo a años caninos, e imprimir en consola 
 * calculateDogAge(2)
 * -> Poppy tiene 14 años caninos
 */
function calculateDogAge(nameDog, ageDog) {
    if (ageDog === 1) {
        console.log(`${nameDog} tiene 15 años caninos`)
    } else if (ageDog === 2) {
        console.log(`${nameDog} tiene 24 años caninos`)
    } else {
        ageDog >= 3
        ageDog += 4
        console.log(`${nameDog} tiene ${ageDog * 4} años caninos`)
    }
}
/**
 * Crear una función que calcule el area y la circunferencia de un circulo
 * Tomar como parametro del radio del circulo
 * calcGeometry(4)
 * -> l area del circulo es NN y la circunferencia es de NN
 */
function calcGeometry(radius) {
    const PI = 3.1416
    const circleArea = PI * (radius * radius)
    const circumfere = 2 * PI * radius

    console.log(`El área del circulo es: ${circleArea} y la circunferencia es: ${circumfere}`)
}
/**
 * Crear una función que convierta los grados celsius en fahrenheit y viceversa
 * debe recibir la temparatura y si la temperatura esta en Celsius o Fahrenheit
 * temperatureConverter(100,"C")
 * -> 100º Celsius equivalen a 212º fahrenheit
 */
/*
 * Escribir una funcion que calcule el factorial de un número
 * getFactorial(10)
 * -> 3628800
 */