const WEEKDAYS = prompt('Ingresa un número entre el 1 y el 7')

switch (WEEKDAYS) {
    case '1':
        console.log('Es lunes')
        break
    case '2':
        console.log('Es martes')
        break
    case '3':
        console.log('Es miércoles')
        break
    case '4':
        console.log('Es jueves')
        break
    case '5':
        console.log('Es viernes')
        break
    case '6':
        console.log('Es sabado')
        break
    default:
        console.log('Es domingo')
}