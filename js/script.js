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

    // HAMBURGUESA

$(".menu-btn").on("click", function () {

    $(".menu").slideToggle();
    $(this).toggleClass("abierto");

})

$(window).on("resize", function () {

    if ($(window).width() > 600) {
        $(".menu").removeAttr("style");
    }

})



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


// SLIDER

// SLIDER
var slides = $(".slide");
var botonNext = $("#siguiente");
var botonPrev = $("#anterior");
var total = slides.length;
var actual = 0;

// Oculta la foto actual y enseña la nueva
function mostrar(indiceSlide) {
    slides.eq(actual).fadeOut();
    actual = indiceSlide;
    slides.eq(actual).fadeIn();
}

// Pasa a la siguiente foto (si es la última, vuelve a la primera)
function siguiente() {
    var n = actual + 1;

    if (n === total) {
        n = 0;
    }

    mostrar(n);
}

// Pasa a la foto anterior (si es la primera, va a la última)
function anterior() {
    var n = actual - 1;

    if (n < 0) {
        n = total - 1;
    }

    mostrar(n);
}

// Avanza solo cada 3 segundos
var automatico = setInterval(siguiente, 3000);
var espera;

// Si el usuario pulsa una flecha, se para y vuelve a arrancar a los 5 segundos
function pausar() {
    clearInterval(automatico);
    clearTimeout(espera);

    espera = setTimeout(function () {
        automatico = setInterval(siguiente, 3000);
    }, 5000);
}

// Flechas
botonNext.on("click", function () {
    siguiente();
    pausar();
});

botonPrev.on("click", function () {
    anterior();
    pausar();
});

