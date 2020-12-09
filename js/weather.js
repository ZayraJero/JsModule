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

// if (WEATHER === 'lluvioso') {
//     console.log('esta nublado')
// } else if (WEATHER === 'soleado') {
//     console.log('esta nublado')
// } else if (WEATHER === 'nublado') {
//     console.log('esta soleado')
// } else if (WEATHER === 'nevando') {
//     console.log('esta lluvioso')
// } else {
//     const NEW_WEATHER = prompt('Describe el clima')
//     console.log('asi esta')
// } 
