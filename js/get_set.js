const obj = {
    name: 'jorge',
    lastname: 'camarillo',
    set newname(name) {
        this.name = name.valor1
    }
}
//UN OBJETO
Object.defineProperty(obj, 'fullname', {
    get: function () {
        return this.name + ' ' + this.lastname
    }
})

let dataUsers = [
    {
        name: 'jorge',
        lastname: 'camarillo',
        age: 20,
        country: 'México'
    },
    {
        name: 'pedro',
        lastname: 'flores',
        age: 30,
        country: 'Peru'
    },
    {
        name: 'laura',
        lastname: 'lopez',
        age: 40,
        country: 'Argentina'
    }
]

Object.defineProperties(dataUsers, {
    prueba: {
        country: 'Brasil',
        get: function () {
            return country
        },
        set: function (newCountry) {
            country = newCountry
        }
    }
})

console.log(dataUsers.prueba)

//MULTIPLES OBJETOS
data.forEach(user => {
    Object.defineProperty(user, 'fullname', {
        get: function () {
            return this.name + ' ' + this.lastname
        }
    })
})
