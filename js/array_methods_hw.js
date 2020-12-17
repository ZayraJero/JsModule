// Ejercicio 1 .forEach()
// Dado un array con solo números
// obtener el valor mas alto
// input: [1,4,3,2,5]
// output: -> [5]

const highValue = arrayNumber => {
    let newValue = -10

    arrayNumber.forEach(item => {
        if (item > newValue) {
            newValue = item
        }
    })
    return newValue
}
// ejercicio 2 .map()
// función
// convertir todos los elementos numericos de un array
// a strings
// input: [1,2,3,4,5]
// output -> ['1,','2','3','4','5']

let arrNum = [1, 2, 3, 4, 5]

const numToStr = arrNum =>
    arrNum.map(item => item.toString())
console.log(numToStr(arrNum))

// ejercicio 3 .map()
// función
// capitalizar todos los elementos que sean strings de un array
// input: ['hOlA', 'mundo', 123]
// output -> ['Hola','Mundo','123]

const arrWord = upperStr => upperStr.map(item => {
    if (typeof item === "string") {
        item.replace(item[0], item[0].toUpperCase())
    }
    return item
})

// console.log(arrWord(['hOlA', 'mundo', 123]));
// ejercicio 4 .filter()
//  funcion
// dado un array de números, filtre los elementos
// y devuelva un array con los elementos que no estan duplicados
// [1,2,4,2,5,4]
// -> [1,5]

// ejercicio 5 .filter()
//  funcion
// dado un array de números, filtre los elementos
// y devuelva un array con los elementos duplicados
// [1,2,4,2,5,4]
// -> [2,4]

// ejercicio 7 .filter()
//  funcion
// dado un array de años, filtre los elementos
// y devuelva un array con los años que son bisiesto
// [1990, 2000, 2001, 2020]
// -> [2000,2020]

const year = arrYear => arrYear(item => item % 4 === 0)
console.log(year([1990, 2000, 2001, 2020]))