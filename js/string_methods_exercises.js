/**
 * ejercicio 1
    1. Asignar un string a una variable
    2. Verificar cuantos caracteres tiene ese string
    3. Imprimirlo en consola
*/
const hello = "Hola Mundo"
const helloNew = hello.length

console.log(helloNew)
/**
 * Ejercicio 2
 * Declarar 2 variables con strings y concatenarlos
 */
const hello_two = "Hola"
const world = "Mundo"

const newResult = hello_two.concat(world)

console.log(newResult)
/**
 * Ejercicio 3
 * Declarar un string de al menos 10 caracteres
 * imprimir en consola del 4 al 6 caracter
 */

const characteres = "characteres"
const result = characteres.slice(4, 6)

console.log(result)
/**
 * Ejercicio 4
 * Declarar un string de al menos 2 palabras
 * imprimir en consola el string separado por guiones en cada palabra
 * "hola koders"
 * "hola-koders"
 */
const new_word = "hello world"
const new_result = new_word.replace(" ", "-")

console.log(new_result)
/**
 * Ejercicio 5
 * Declarar un string de al menos 2 palabras
 * imprimir en consola el string con cada una de las palabras Capitalizadas
 * "hola koders"
 * "Hola Koders"
 */
const word_new = "hola koders"
const word_split = word_new.split(' ')
const word_cap = []

for (i = 0; i < word_split.length; i++) {
    word_cap.push(
        word_split[i].charAt(0).toUpperCase() + word_split[i].slice(1)
    )
}

console.log(word_cap.join(' '))
/**
 * Ejercicio 6
 * Declarar un string con un correo electrónico
 * Enmascarar con "*" el bloque del usuario
 * "jorgec@kodemia.mx"
 * "*****@kodemia.mx"
 */
const email_user = "koders@gmail.com"
const new_res = email_user.indexOf('@')
const result_email = email_user.slice(6)

console.log(`******${result_email}`)
/**
 * Ejercicio 8
 * Declarar un string de al menos 2 palabras
 * convertir ese string en un array
 * "Hola koders"
 *  ["hola", "koders"]
 */
const two_words = "dos palabras otra palabra"
const res_new = two_words.split(" ")

console.log(res_new)