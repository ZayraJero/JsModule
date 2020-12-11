//tabla del 8 reversa
for (let i = 10; i >= 1; i--) {
    // console.log(`8 x ${i} = ${8 * i}`)
}

let counter = 1
while (counter <= 10) {
    // console.log(`8 x ${i} = ${8 * i}`)
    counter = counter + 1
}
//imprimir numeros pares entre 1 y 100
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        // console.log(i)
    }
}

let numbers = 1
while (numbers <= 100) {
    if (numbers % 2 === 0) {
        // console.log(numbers)
    }
    numbers++
}

//dado un string "reverse" invertir el orden

let strRev = 'reverse'
let reverse = ''

for (let i = strRev.length - 1; i >= 0; i--) {
    reverse += strRev[i]
}
// console.log(reverse)

let str = 'reverse'
let rev = ''
let contador = str.length - 1

while (contador >= 0) {
    rev += str[contador]
    contador--
}
console.log(rev)