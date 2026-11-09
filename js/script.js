$(document).ready(function () {

    // ACORDEÓN DEL MENÚ
    $(".menu__titulo").on("click", function () {
        $(this).toggleClass("abierto");
        $(this).next().slideToggle("fast");
    });

    // CORAZÓN DE FAVORITOS Y ACTIVAR CARPETA LATERAL
    $(".btn-fav").on("click", function () {
        $(this).find("i").toggleClass("activo");

        if ($(".btn-fav i.activo").length > 0) {
            $("#carpeta-favoritos").fadeIn(200);
        } else {
            $("#carpeta-favoritos").fadeOut(200);
        }
    });

    // CAMBIAR FOTO DELANTERA / TRASERA 
    $(".visor__btn").on("click", function () {
        $(this).parent().find(".visor__img").toggleClass("activa");
    });

    // CAMBIO AUTOMÁTICO POR TANDAS
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

    // VENTANA MODAL DE BARRY B
    $("#btn-abrir-modal").on("click", function () {
        $("#modal-barry").css("display", "flex").hide().fadeIn(200);
    });

    $("#btn-cerrar-modal").on("click", function () {
        $("#modal-barry").fadeOut(200);
    });

    // Cerrar si se hace clic fuera de la tarjeta blanca
    $("#modal-barry").on("click", function (e) {
        if ($(e.target).is("#modal-barry")) {
            $(this).fadeOut(200);
        }
    });

    // Acción al pulsar añadir a la cesta dentro del modal
    $("#btn-anadir-modal").on("click", function () {
        $(this).text("¡Añadido a la cesta!");
        var $boton = $(this);
        setTimeout(function () {
            $("#modal-barry").fadeOut(200, function () {
                $boton.text("Añadir a la cesta");
            });
        }, 900);
    });

});