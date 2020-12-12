//tabla del 8 reversa
function multiTable() {
    for (let i = 10; i >= 1; i--) {
    }
    console.log(`8 x ${i} = ${8 * i}`)
}

//imprimir numeros pares entre 1 y 100
function pairNumbers() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
        }
        console.log(pairNumbers)
    }
}

// imprimir en consola los múltiplos de 3 y 7  que se encuentran entre el 1 y el 100
function multiple() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 || i % 7 === 0) {
            console.log(i)
        }
    }
}

// imprimir en consola la cantidad de espacios que se encuentran en una cadena de texto
function textSpace() {
    const text = 'En un lugar de la mancha'
    let count = 0

    for (i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            count += 1
        }
    }
    console.log(`la frase tiene ${count} espacios`)
}

// imprimir en consola la cantidad de vocales que se encuentran en una cadena de texto
function vocals() {
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
}

// calificacion con letras
function grades() {
    const EXAM_GRADE = prompt('Ingresa la calificación del examen (0 a 100)')
    if (EXAM_GRADE >= 90) {
        console.log('Tu calificación es: A')
    } else if (EXAM_GRADE >= 80 && EXAM_GRADE < 90) {
        console.log('Tu calificación es: B')
    } else if (EXAM_GRADE >= 70 && EXAM_GRADE < 80) {
        console.log('Tu calificación es: C')
    } else if (EXAM_GRADE >= 60 && EXAM_GRADE < 70) {
        console.log('Tu calificación es: D')
    } else if (EXAM_GRADE >= 50 && EXAM_GRADE < 60) {
        console.log('Tu calificación es: E')
    } else {
        EXAM_GRADE < 50
        console.log('Tu calificación es: F')
    }
}

//clima
function weatherDay() {
    const WEATHER = prompt('Ingresa el clima')

    switch (WEATHER) {
        case 'lluvioso':
            console.log('esta nublado')
            break
        case 'soleado':
            console.log('esta nublado')
            break
        case 'nublado':
            console.log('esta soleado')
            break
        case 'nevando':
            console.log('esta lluvioso')
            break
        default:
            const NEW_WEATHER = prompt('Describe el clima')
            console.log('asi esta')
    }
}

//par o impar
function number() {
    const EVEN_ODD = prompt('Ingresa un número entre 1 y 100')

    EVEN_ODD % 2 === 0 ?
        console.log(`El ${EVEN_ODD} es número par`)
        :
        console.log(`El ${EVEN_ODD} es número impar`)
}

//peso en la luna
function weight(earth_weight) {
    let weight_moon = (parseInt(earth_weight) / 9.81) * 1.622
    console.log('Tu peso en la luna es..' + weight_moon + ' Kg')
}

//nombre en reverso
function reverse(txt) {
    const wordRev = txt
    let rev = ''
    for (let i = wordRev.length - 1; i >= 0; i--) {
        rev += wordRev[i]
    }
    console.log(rev)
}