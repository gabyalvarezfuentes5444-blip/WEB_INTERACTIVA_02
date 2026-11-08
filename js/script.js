// MENU 
$(document).ready(function () {

    // ACORDEÓN DEL MENÚ
    $(".menu__titulo").on("click", function () {
        $(this).toggleClass("abierto");
        $(this).next().slideToggle("fast");
    });

    // cORAZÓN DE FAVORITOS
    $(".btn-fav").on("click", function () {
        $(this).find("i").toggleClass("activo");

        if ($(".btn-fav i.activo").length > 0) {
            $("#carpeta-favoritos").fadeIn(200);
        } else {
            $("#carpeta-favoritos").fadeOut(200);
        }
    });

    // CAMBIAR FOTO DELANTERA A TRASERA
    $(".visor__btn").on("click", function () {
        $(this).parent().find(".visor__img").toggleClass("activa");
    });

});

// ACORDEON
$(".acordeon__titulo").on("click", function () {

    var contenido = $(this).next();

    // Cerramos los demas
    $(".acordeon__contenido").not(contenido).slideUp();
    $(".acordeon__titulo").not(this).removeClass("abierto");

    // Abrimos o cerramos el que hemos pulsado
    contenido.slideToggle();
    $(this).toggleClass("abierto");

})