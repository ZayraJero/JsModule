//['a', 'b', 'c', 'c', 'b']
//searchOcurrence(array, 'character')
//searchOcurrence(['a', 'b', 'c', 'c', 'b'], 'c')
//2

const repitVocal = (searchVocal, search) => {
    let repit = searchVocal.reduce((accumulator, currentValue) => {
        if (currentValue === search) {
            return accumulator + 1
        } else {
            return accumulator
        }
    }, 0)
    return repit
}

// const repitVocal = (searchVocal, search) => {
//     let repit = searchVocal.reduce((accumulator, currentValue) => {
//         let sum = currentValue === search ? 1 : 0
//         return accumulator + sum
//     }, 0 )
//     return repit
// }

//['en', 'algun', 'lugar', 'de', 'la', 'mancha']
// en algun lugar de la mancha
//.reduce()

const text = ['en', 'algun', 'lugar', 'de', 'la', 'mancha']

let textStr = text.reduce((count, currentValue) => {
    return count + currentValue + " "
}, "")

console.log(textStr)
