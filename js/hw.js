// HomeWork
// 1.
// si el usuario no tiene la cookie sessionuser
// Redireccionarlo al /login.html
// si tiene la cookie sessionuser
// redireccionarlo a /user.html

const cookieUser = () => {
    if (document.cookie.includes) {

    } else {

    }
}

// 2. 
// Crear un div con un mensaje de
// "Este sitio se ve mejor en desktop"

// si el viewportWidth es <= 767
// aparecer el mensaje
// sino
// desaparecer el mensaje

const desktop = () => {
    if (window.innerWidth <= 767) {
        document.querySelector('.desktop').classList.remove('d-block')
        document.querySelector('.desktop').classList.add('d-none')
    } else {
        document.querySelector('.desktop').classList.remove('d-none')
        document.querySelector('.desktop').classList.add('d-block')
    }
}

window.addEventListener('resize', desktop)

// utilizar css
// no usar inline styles