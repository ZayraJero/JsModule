// Asynchronous JavaScript And XML
// JSON
// XML
const loadUsers = () => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) {
            return
        } else {
            if (request.status >= 200 && request.status <= 299) {
                const response = request
                console.log(response)
                const objectUsers = JSON.parse(response.responseText)
                let listUsers = ''
                objectUsers.forEach(user => {
                    listUsers += `<li>${user.name} ${user.phone} <a href="${user.website}">Ir a sitio web</a></li>`
                });
                document.querySelector('.list__users').innerHTML = listUsers
            } else {
                console.log('No se pudo ejecutar')
            }
        }
    })
    request.open("GET", 'https://jsonplaceholder.typicode.com/users')
    request.send()
}
// loadUsers()
document.getElementById('getusers').addEventListener('click', loadUsers)
// window.addEventListener('load', loadUsers)