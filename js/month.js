const MONTHS = prompt('Ingresa un número del 1 al 12')

switch (MONTHS) {
    case '1':
        console.log('El mes tiene 31 días')
        break
    case '3':
        console.log('El mes tiene 31 días')
        break
    case '4':
        console.log('El mes tiene 30 días')
        break
    case '5':
        console.log('El mes tiene 31 días')
        break
    case '6':
        console.log('El mes tiene 30 días')
        break
    case '7':
        console.log('El mes tiene 31 días')
        break
    case '8':
        console.log('El mes tiene 31 días')
        break
    case '9':
        console.log('El mes tiene 30 días')
        break
    case '10':
        console.log('El mes tiene 31 días')
        break
    case '11':
        console.log('El mes tiene 30 días')
        break
    case '12':
        console.log('El mes tiene 31 días')
        break
    default:
        console.log('El mes tiene 29 días')
}


// let max_days = [1, 3, 5, 7, 8, 10, 12]
// let med_days = [4, 6, 9, 11]

// if (MONTHS === max_days) {
//     console.log('El mes tiene 31 días')
// } else if (MONTHS === med_days) {
//     console.log('El mes tiene 30 días')
// } else {
//     let min_days = [29]
//     console.log('El mes tiene 29 días')
// }