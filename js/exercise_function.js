//tabla de multiplicar en orden
function multiTable(strNumber) {
    for (let i = 0; i < strNumber.length; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(`${strNumber[i]} x ${j} = ${parseInt(strNumber[i]) * j}`)
        }
    }
}

//palindromo
function palindrome(phrase) {
    const txt = phrase.replace(/ /g, '')
    let wordRev = ''

    for (let i = txt.length - 1; i >= 0; i--) {
        wordRev += txt[i]
    }
    console.log(wordRev)
    if (txt === wordRev) {
        console.log('Es palindromo')
    } else {
        console.log('No es palindromo')
    }
}

//number string
function twoTypes(num, str) {
    console.log('este dato es:', typeof num)
    console.log('este dato es:', typeof str)
}