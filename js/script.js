// MENU 

$(document).ready(function () {

    // Menú: al pulsar "Tienda" se abre/cierra Vinilos y Merch
    $('.menu__titulo').on('click', function () {
        $(this).next('.menu__contenido').slideToggle(300);
        $(this).toggleClass('abierto');
    });

});