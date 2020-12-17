//REDUCE
//arr.reduce(callback(accumulator,currentValue,[,index [, array]]) [, initValue]))

const arrReduce = [1, 2, 3, 4]
arrReduce.reduce((accumulator, currentValue) => {
    let suma = accumulator + currentValue

    console.log(accumulator, currentValue)
    return suma
}, 10)

arrReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)