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

