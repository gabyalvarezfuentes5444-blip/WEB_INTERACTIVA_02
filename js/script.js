// MENU 

$(document).ready(function () {

    // Menú: al pulsar "Tienda" se abre/cierra Vinilos y Merch
    $('.menu__titulo').on('click', function () {
        $(this).next('.menu__contenido').slideToggle(300);
        $(this).toggleClass('abierto');
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