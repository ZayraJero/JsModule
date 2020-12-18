let obj = {
    key: value,
    key: value
}

let person = {
    name: 'nayeli',
    isKoder: true,
    age: 20,
    location: {
        street: 'lorem',
        cp: '2345'
    },
    credential: {
        key1: '234',
        key2: '45667'
    },
    pets: ['puppy', 'scooby']
}
person.newValue = 'nuevo'
person.location.street = 'otro'

delete person.credential.key2

for (item in person) {
    // console.log(person[item])
    if (item === 'location') {
        for (item2 in person[item]) {
            console.log(`${item}: ${person[item][item2]}`)
        }
    }
}

for (item in person['location']) {
    console.log(`${item}: ${person['location'][item2]}`)
}

for (item in person) {
    if (item === 'location' || item === 'credential') {
        for (item2 in person[item]) {
            console.log(`${item2}: ${person[item][item2]}`)
        }
    }
}


console.log(person['age'])
console.log(person.age)
console.log(person['location']['cp'])
console.log(person.pets[1])

let person2 = new object()
person2.location = {}
person2.location.cp = '3456'


// obj koders
let koders = [
    {
        name: 'nayeli',
        average: 10,
        location: {
            cp: '55778',
            street: ' asadaas'
        }
    },
    {
        name: 'nayeli',
        average: 9
    }
]

// imprimir el promedio de cada koder
koders.forEach((current, index) => {
    console.log(current.average)
})

// imprimir el promedio general de los koders
let averageKoders = koders.reduce((acc, cv) => {
    return acc + cv.average
}, 0) / koders.length
console.log(averageKoders)

// Filtrar los koders que tienen promodio mayor a 9
koders.filter((cv) => {
    return cv.average > 9
})

// Filtrar los koders que tengan la propiedad location
koders.filter((cv) => {
    if (cv.location) {
        return cv
    }
})

