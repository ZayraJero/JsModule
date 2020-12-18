let numbersReduce = [1, 2, 4]

numbersReduce.reduce((acc, cv) => {
    let sum = acc + cv

    console.log(acc, cv)
    return sum
}, 0)


let numbersReduce = [
    [1, 2, 4],
    [1, 2, 8],
    [1, 9, 3]
]

const result = arr => {
    let total = 0
    arr.reduce((acc, cv) => {
        console.log(acc, cv)
        let arrayTR = cv

        let resultInterior = arrayTR.reduce((acc2, cv2) => {
            return acc2 + cv2
        }, 0)
        return acc + resultInterior
    }, 0)
    return total
}

const result = arr => {
    return arr.reduce((acc, cv) => {
        return acc + cv.reduce((acc2, cv2) => {
            return acc2 + cv2
        }, 0)
    }, 0)
} 