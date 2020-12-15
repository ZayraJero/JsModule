const myArray = ["string", 2[1, 2, 3]]
console.log(myArray[1])
console.log(myArray[2][2])

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}


const multTable = [1, 4, 7]

for (let i = 0; i < multTable.length; i++) {

    const tableNumber = multTable[i]

    for (let j = 1; j <= 10; j++) {
        console.log(`${tableNumber} x ${j} = ${tableNumber * j}`)
    }
}

const arraySumNumber = [1, 2, 3, 4]
let toralArray = 0
for (let count = 0; count < arraySumNumber.length; count++) {
    toralArray += arraySumNumber[count]
}
console.log(toralArray)

