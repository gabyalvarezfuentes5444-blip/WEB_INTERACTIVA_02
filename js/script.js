// MENU 
$(document).ready(function () {

    // ACORDEÓN MENÚ
    $(".menu__titulo").on("click", function () {
        $(this).toggleClass("abierto");
        $(this).next().slideToggle("fast");
    });

    // CORAZÓN DE FAVORITOS
    $(".btn-fav").on("click", function () {
        $(this).find("i").toggleClass("activo");

        if ($(".btn-fav i.activo").length > 0) {
            $("#carpeta-favoritos").fadeIn(200);
        } else {
            $("#carpeta-favoritos").fadeOut(200);
        }
    });

    // CAMBIAR FOTO DELANTERA/TRASERA
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


    // CAMBIO DE FOTOS ALARGADAS TRANSICIÓN
    var $columnas = $(".tira-artistas__item").not(".tira-artistas__item--barry");
    var indiceColumna = 0;

    if ($columnas.length > 0) {
        setInterval(function () {
            var $columnaActual = $columnas.eq(indiceColumna);
            var $imagenes = $columnaActual.find("img");

            if ($imagenes.length > 1) {
                var $imgActiva = $columnaActual.find("img.activa");
                var $imgSiguiente = $imgActiva.next("img");

                if ($imgSiguiente.length === 0) {
                    $imgSiguiente = $imagenes.first();
                }

                $imgActiva.removeClass("activa");
                $imgSiguiente.addClass("activa");
            }

            indiceColumna = (indiceColumna + 1) % $columnas.length;
        }, 2500);
    }

    // FILTROS DE EVENTOS 
    $(".filtro-btn").on("click", function () {
        $(".filtro-btn").removeClass("activo");
        $(this).addClass("activo");

        var filtro = $(this).attr("data-filtro");

        if (filtro === "todos") {
            $(".evento-card").fadeIn(200);
            $(".eventos__subtitulo").text("Mostrando todos los eventos.");
        } else if (filtro === "pasado") {
            $(".evento-card").hide();
            $('.evento-card[data-categoria="pasado"]').fadeIn(200);
            $(".eventos__subtitulo").text("Mostrando eventos pasados.");
        } else if (filtro === "actual") {
            $(".evento-card").hide();
            $('.evento-card[data-categoria="actual"]').fadeIn(200);
            $(".eventos__subtitulo").text("Mostrando eventos actuales.");
        }
    });

    // VENTANA MODAL DE BARRY 
    $("#btn-abrir-modal").on("click", function () {
        $("#modal-barry").css("display", "flex").hide().fadeIn(200);
    });

    $("#btn-cerrar-modal").on("click", function () {
        $("#modal-barry").fadeOut(200);
    });

    $("#modal-barry").on("click", function (e) {
        if ($(e.target).is("#modal-barry")) {
            $(this).fadeOut(200);
        }
    });

    // BOTÓN AÑADIR A LA CESTA
    $(document).on("click", "#btn-anadir-modal, .modal-btn-cesta, .btn-cesta, .producto__boton, button, a", function (e) {
        var $boton = $(this);
        var textoActual = $boton.text().trim();

        if ($boton.is("#btn-anadir-modal, .modal-btn-cesta") || textoActual === "Añadir a la cesta") {
            e.preventDefault();

            $boton.text("¡Añadido a la cesta!").addClass("anadido");

            
            if ($boton.closest("#modal-barry").length > 0) {
                setTimeout(function () {
                    $("#modal-barry").fadeOut(200, function () {
                        $boton.text("Añadir a la cesta").removeClass("anadido");
                    });
                }, 900);
            } else {
               
                setTimeout(function () {
                    $boton.text("Añadir a la cesta").removeClass("anadido");
                }, 1200);
            }
        }
    });

