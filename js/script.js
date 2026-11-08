// MENU 

$(document).ready(function () {

    // ACORDEÓN DEL MENÚ
    $(".menu__titulo").on("click", function () {
        $(this).toggleClass("abierto");
        $(this).next().slideToggle("fast");
    });

    // CORAZÓN DE FAVORITOS
    $(".btn-fav").on("click", function () {
        $(this).find("i").toggleClass("activo");
    });

    // CAMBIAR FOTO DELANTERA /TRASERA DE CAMISETAs
    $(".visor__btn").on("click", function () {
        $(this).parent().find(".visor__img").toggleClass("activa");
    });

});