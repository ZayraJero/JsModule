// Create user
const createUser = () => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(JSON.parse(this.response))
        } else if (this.readyState === 4 && this.status === 404) {
            console.error(JSON.parse(this.response))
            return false
        }
    }
    xhttp.open('POST', 'https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/.json')
    xhttp.send(
        JSON.stringify({
            id: 1,
            name: "Jorge",
            lastname: "Camarillo",
            urlPhoto: "https://loremflickr.com/320/240/person"
        })
    )
}
// Read user
const readUser = () => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(JSON.parse(this.response))
        } else if (this.readyState === 4 && this.status === 404) {
            console.error(JSON.parse(this.response))
            return false
        }
    }
    xhttp.open('GET', 'https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/.json')
    // xhttp.open('GET', 'https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/-MQnTbsClYPUsYDcBS-R.json')
    xhttp.send()
}
// Update and replace
const updateAndReplaceUser = (idUser) => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(JSON.parse(this.response))
        } else if (this.readyState === 4 && this.status === 404) {
            console.error(JSON.parse(this.response))
            return false
        }
    }
    xhttp.open('PUT', `https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/${idUser}.json`)
    xhttp.send(
        JSON.stringify({
            id: 1,
            name: "Jorge",
            lastname: "Camarillo",
            urlPhoto: "https://loremflickr.com/320/240/person"
        })
    )
}
// Update and modify 
const updateAndModifyUser = (idUser) => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(JSON.parse(this.response))
        } else if (this.readyState === 4 && this.status === 404) {
            console.error(JSON.parse(this.response))
            return false
        }
    }
    xhttp.open('PATCH', `https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/${idUser}.json`)
    xhttp.send(
        JSON.stringify({
            name: "Jorge Luis"
        })
    )
}
// Delete 
const deleteUser = (idUser) => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(JSON.parse(this.response))
        } else if (this.readyState === 4 && this.status === 404) {
            console.error(JSON.parse(this.response))
            return false
        }
    }
    xhttp.open('DELETE', `https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/${idUser}.json`)
    xhttp.send()
}