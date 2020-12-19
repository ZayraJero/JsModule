//ACCESORS

let obj = {}
let obj = {
    name: 'ruben',
    lastname: 'flores',
    age: 29,
    assigments: [
        {
            na: 'español',
            ave: 90
        },
        {
            na: 'matematicas',
            ave: 90
        },
        {
            na: 'ciencias',
            ave: 90
        }
    ],
    getAverage: function () {
        let assigments = this.assigments
        let total = assigments.reduce((acc, cv) => {
            return acc + cv.ave
        }, 0)
        return total / assigments.length
    },


    getfullname: function () {
        return this.name + ' ' + this.lastname
    },
    saltar: function () {
        return `${this.name} esta saltando`
    },
    getYearsOld: function () {
        return `${this.age} años`
    }
}
// console.log(obj.getfullname())
// console.log(obj.saltar())


// console.log(obj.getAverage())

let koder = {
    name: 'Zayra',
    lastname: 'Jerónimo',
    age: '12/11/1992',
    gender: 'M',
    bootcamp: 'python',
    generation: 1,
    activities: [
        {
            class: 'html y css',
            workshop: 'git y github'
        },
        {
            class: 'javascript',
            workshop: 'git y github'
        }
    ],
    getclasses: function () {
        let activities = this.activities
        let total = activities.reduce((acc, cv) => {
            return acc + cv.class
        }, 0)
        return total
    },
    getfullname: function () {
        return this.name + ' ' + this.lastname
    },
    getAge: function () {
        let date = this.birthday.slice(this.birthday.length - 4)
        return `${this.getfullname()} tiene ${2020 - date} años`
    }
}

console.log(koder.getfullname())
console.log(koder.getclasses())