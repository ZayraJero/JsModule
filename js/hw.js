// dado el layout homework.html
/**
 * Cuando el usuario ponga cualquier ciudad en el input de busqueda
 * de la lista de ciudades, filtrar solo las que coincidan con la busqueda
 */

$("#busqueda").keyup(function () {
    let value = $(this).val().toLowerCase();
    $("#ciudades li").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});

//otra solucion
// $('#busqueda').keyup(function(){

//     let term = $(this).val()
//     $('#ciudades li').hide()
//     let ciudades = $("#ciudades li")
//     for(item of ciudades) {
//         console.log(item)
//         if (item.innerText.toLowerCase().search(term.toLowerCase()) !== -1) { 
//             $(item).show()
//         }
//     }
//     $("#ciudades li").each((id, elem) => { 
//         if (elem.innerText.toLowerCase().search(term.toLowerCase()) !== -1) { 
//             $("#ciudades li").eq(id).show()
//         } 
//     })

// })