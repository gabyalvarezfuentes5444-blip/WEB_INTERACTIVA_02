$(document).ready(function () {

    // ACORDEÓN MENÚ Tienda
    $(".menu__titulo").on("click", function () {
        $(this).toggleClass("abierto");
        $(this).next().slideToggle("fast");
    });

    // HAMBURGUESA MÓVIL
    $(".menu-btn").on("click", function () {
        $(".menu").slideToggle(200).toggleClass("abierto activo");
        $(this).toggleClass("abierto");
    });

    $(window).on("resize", function () {
        if ($(window).width() > 768) {
            $(".menu").removeAttr("style").removeClass("abierto activo");
        }
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

    // CAMBIAR FOTO DELANTERA/TRASERA DE MERCH
    $(".visor__btn").on("click", function () {
        $(this).parent().find(".visor__img").toggleClass("activa");
    });

    // ACORDEÓN ABOUT
    $(".acordeon__titulo").on("click", function () {
        var contenido = $(this).next();

        $(".acordeon__contenido").not(contenido).slideUp();
        $(".acordeon__titulo").not(this).removeClass("abierto");

        contenido.slideToggle();
        $(this).toggleClass("abierto");
    });

    // PARALLAX
    var parallax = null;
    var imagenes = document.querySelectorAll(".parallax");
    if (imagenes.length > 0 && typeof SimpleParallax !== "undefined") {
        parallax = new SimpleParallax(imagenes, {
            orientation: "up",
            scale: 1.4
        });
    }

    // SLIDER
    var slides = $(".slide");
    var botonNext = $("#siguiente");
    var botonPrev = $("#anterior");
    var total = slides.length;
    var actual = 0;

    if (total > 0) {
        function mostrar(indiceSlide) {
            slides.eq(actual).fadeOut();
            actual = indiceSlide;
            slides.eq(actual).fadeIn();

            if (parallax && typeof parallax.refresh === "function") {
                parallax.refresh();
            }
        }

        function siguiente() {
            var n = actual + 1;
            if (n === total) {
                n = 0;
            }
            mostrar(n);
        }

        function anterior() {
            var n = actual - 1;
            if (n < 0) {
                n = total - 1;
            }
            mostrar(n);
        }

        var automatico = setInterval(siguiente, 3000);
        var espera;

        function pausar() {
            clearInterval(automatico);
            clearTimeout(espera);

            espera = setTimeout(function () {
                automatico = setInterval(siguiente, 3000);
            }, 5000);
        }

        botonNext.on("click", function () {
            siguiente();
            pausar();
        });

        botonPrev.on("click", function () {
            anterior();
            pausar();
        });
    }

    // CAMBIO DE FOTOS ALARGADAS 
    var $columnas = $(".tira-artistas__item");
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
    $(document).on("click", "#btn-abrir-modal, #evento-barry .btn-verde-peq", function (e) {
        e.preventDefault();
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

    // CONTADOR DEL CARRITO Y BOTÓN AÑADIR A LA CESTA
    var cantidadCarrito = parseInt(sessionStorage.getItem("contadorMarilians")) || 0;

    if ($(".carrito-contador").length === 0) {
        $(".cabecera__iconos").append('<span class="carrito-contador"></span>');
    }

    function pintarContador() {
        if (cantidadCarrito > 0) {
            $(".carrito-contador").text(cantidadCarrito).css("display", "inline-flex");
        } else {
            $(".carrito-contador").hide();
        }
    }

    pintarContador();

    $(document).on("click", "#btn-anadir-modal, .modal-btn-cesta, .btn-cesta, .producto__boton, button, a", function (e) {
        var $boton = $(this);
        var textoActual = $boton.text().trim();

        if ($boton.is("#btn-anadir-modal, .modal-btn-cesta, .btn-cesta, .producto__boton") || textoActual === "Añadir a la cesta") {
            e.preventDefault();

            if (!$boton.hasClass("anadido")) {
                cantidadCarrito++;
                sessionStorage.setItem("contadorMarilians", cantidadCarrito);
                pintarContador();
            }

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

    // TRANSICIÓN HEY LETS GO 
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 2000
        });
    }

});