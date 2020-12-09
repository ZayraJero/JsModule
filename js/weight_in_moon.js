let weight_user = prompt('¿Cuál es tu peso en KG?')

let resultWeight = (weight_user / 9.81) * 1.622

let result = 'Tu peso en la luna es: ' + resultWeight + ' kg.'
let resultTwo = `Tu peso en la luna es:  $ {resultWeight} kg.`

alert(resultTwo)