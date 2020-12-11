// Imprimir en consola la tabla del 7
// 7 x 1 = 7
for (let i = 1; i <= 10; i++) {
    // console.log(`7 x ${i} = ${7 * i}`)
}
// imprimir en consola los múltiplos de 3 y 7  que se encuentran entre el 1 y el 100
// 3,6,7,9,12,14,15....
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 7 === 0) {
        // console.log(i)
    }
}
// imprimir en consola la cantidad de espacios que se encuentran en una cadena de texto
// “en un lugar de la mancha” -> 5
const text = 'En un lugar de la mancha'
let count = 0

for (i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
        count += 1
    }
}
console.log(`la frase tiene ${count} espacios`)
// imprimir en consola la cantidad de vocales que se encuentran en una cadena de texto
// “Hola mundo” -> 4
const txt = 'Hola mundo'
let count_new = 0
const vocals = ['a', 'e', 'i', 'o', 'u']

for (let i = 0; i < txt.length; i++) {
    for (let j = 0; j < vocals.length; j++) {
        if (txt[i].includes(vocals[j])) {
            count_new++
        }
    }
}

console.log(`la frase tiene ${count_new} vocales`)