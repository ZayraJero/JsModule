// dado el layout homework.html
/**
 * Cuando el usuario ponga cualquier ciudad en el input de busqueda
 * de la lista de ciudades, filtrar solo las que coincidan con la busqueda
 */

$(document).ready(function () {
    $("#busqueda").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#ciudades li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});