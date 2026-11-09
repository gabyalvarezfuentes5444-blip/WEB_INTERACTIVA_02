// AQUI ESTA EL ARRAY DE LOS VINILOS

var discos = [
    {
        nombre: "Daisy",
        artista: "Rusowsky",
        tipo: "Nacional",
        imagen: "MEDIA/IMG/daisy.png",
        foto: "MEDIA/IMG/daisy-modal.png",
        tracklist: ["KINKI FÍGARO", "Johnny Glamour", "SOPHIA", "BBY ROMEO", "pink + pink", "ALTAGAMA", "4 Daisy", "malibU", "LIAR?", "(ecco)", "sukkKK!!", "project tu culo", "99%", "barquito (bonus track)"]
    },
    {
        nombre: "Debí Tirar Más Fotos",
        artista: "Bad Bunny",
        tipo: "Internacional",
        imagen: "MEDIA/IMG/dtmf.png",
        foto: "MEDIA/IMG/dtmf-modal.png",
        tracklist: ["NUEVAYoL", "VOY A LLeVARTE PA PR", "BAILE INoLVIDABLE", "PERFuMITO NUEVO", "WELTiTA", "VeLDÁ", "EL CLúB", "KETU TeCRÉ", "BOKeTE", "KLOuFRENS", "TURiSTA", "CAFé CON RON", "PIToRRO DE COCO", "LO QUE LE PASÓ A HAWAii", "EoO", "DtMF", "LA MuDANZA"]
    },
    {
        nombre: "Data",
        artista: "Tainy",
        tipo: "Internacional",
        imagen: "MEDIA/IMG/data.png",
        foto: "MEDIA/IMG/data-modal.png",
        tracklist: ["obstáculo", "PASIEMPRE", "Todavía", "FANTASMA | AVC", "MOJABI GHOST", "11 Y ONCE", "desde las 10", "mañana", "BUENOS AIRES", "COLMILLO", "LA BABY", "me jodí...", "VOLVER", "EN VISTO", "Lo Siento BB://", "si preguntas por mí", "Sci-Fi", "CORLEONE INTERLUDE", "PARANORMAL", "SACRIFICIO"]
    },
    {
        nombre: "Viceversa",
        artista: "Rauw Alejandro",
        tipo: "Internacional",
        imagen: "MEDIA/IMG/viceversa.png",
        foto: "MEDIA/IMG/viceversa-modal.png",
        tracklist: ["Todo de ti", "Sexo virtual", "Nubes", "Desesperados", "2/Catorce", "Aquel nap ZzZz", "Cúrame", "Cosa guapa", "Desenfocao'", "¿Cuándo fue?", "La Old Skul", "¿Y eso?", "Tengo un pa", "Brazilera"]
    },
    {
        nombre: "Karma",
        artista: "Stray Kids",
        tipo: "Internacional",
        imagen: "MEDIA/IMG/karma.png",
        foto: "MEDIA/IMG/karma-modal.png",
        tracklist: ["BLEEP", "CEREMONY", "CREED", "MESS", "In My Head", "Half Time", "Phoenix", "Ghost", "0801", "CEREMONY (Festival Version)", "CEREMONY (English Version)"]
    },
    {
        nombre: "Fortuna Kid",
        artista: "Barry B",
        tipo: "Nacional",
        imagen: "MEDIA/IMG/fortuna-kid.png",
        foto: "MEDIA/IMG/fortuna-kid-modal.png",
        tracklist: ["Fortuna", "La suerte del perdedor", "Todo cambió", "Juntos", "No pega igual", "Una vida en llamas", "Solo tú puedes entrar", "Silverado", "Nunca me olvidaré", "Location", "Robin Hood", "Vivir para siempre", "La mejor parte de mi", "Kid"]
    },
    {
        nombre: "Omakase",
        artista: "Álvaro Díaz",
        tipo: "Internacional",
        imagen: "MEDIA/IMG/omakase.png",
        foto: "MEDIA/IMG/omakase-modal.png",
        tracklist: ["SICHEF.", "MDF.", "SELEDA.", "BIMEL.", "PIENSO EN TI.", "PERDISTE EL EMMY.", "TREINEL.", "EN LA MISMA CIUDAD.", "KILO.", "BABYRECORDS.", "SPACEXXX.", "MALASNOTICIAS.", "INAROW62.", "NO PODEMOS SER AMIGOS.", "OVELNAIT.", "LAULTIMACENA."]
    },
    {
        nombre: "Supernova",
        artista: "Ralphie Choo",
        tipo: "Nacional",
        imagen: "MEDIA/IMG/supernova.png",
        foto: "MEDIA/IMG/supernova-modal.png",
        tracklist: ["Juan Salvador Gaviota", "NHF", "Bulerías De Un Caballo Malo", "Total90Nostalgia", "Bó", "Whipcream", "WCID?", "Gata", "Máquina Culona", "Voycontodo", "Supernova", "Tangos De Una Moto Trucada", "Beso Bruma", "Metaverse"]
    },
    {
        nombre: "Corazón Verde",
        artista: "Sticky M.A",
        tipo: "Nacional",
        imagen: "MEDIA/IMG/corazon-verde.png",
        foto: "MEDIA/IMG/corazon-verde-modal.png",
        tracklist: ["Opening", "Guts & Griffith", "Extasis", "Kasei", "Normal", "Bajo Cero", "Sekiro", "Mambo", "Gotta Go", "Tango", "Ending"]
    }
];


// FILTRO

function pintarDiscos(tipo) {
    var html = "";
    var cuantos = 0;

    // Recorremos todos los discos
    for (var i = 0; i < discos.length; i++) {

        // Solo pintamos los que tocan según el filtro
        if (tipo === "Todos" || discos[i].tipo === tipo) {

            // Montamos el tracklist: un <li> por cada canción
            var canciones = "";
            for (var j = 0; j < discos[i].tracklist.length; j++) {
                canciones = canciones + '<li>' + discos[i].tracklist[j] + '</li>';
            }

            // Montamos la tarjeta del disco
            html = html +
                '<article class="disco">' +
                    '<div class="disco__portada">' +
                        '<img src="' + discos[i].imagen + '" alt="' + discos[i].nombre + '">' +
                        '<button type="button" class="disco__boton" data-indice="' + i + '">Ver más</button>' +
                    '</div>' +
                    '<div class="disco__titulo">' +
                        '<h3>' + discos[i].nombre + ' - ' + discos[i].artista + '</h3>' +
                        '<button type="button" class="disco__favorito"><i class="fa-regular fa-heart"></i></button>' +
                    '</div>' +
                    '<p class="disco__tracklist-titulo">Tracklist</p>' +
                    '<ol class="disco__tracklist">' + canciones + '</ol>' +
                '</article>';

            cuantos = cuantos + 1;
        }
    }

    // Metemos todo dentro de la caja vacía y actualizamos el contador
    $("#discos").html(html);
    $("#contador").text("Mostrando " + cuantos + " vinilos.");
}


// Al cargar la página se ven todos
pintarDiscos("Todos");


$(".filtro").on("click", function () {

    // Leemos qué filtro se ha pulsado: "Todos", "Nacional" o "Internacional"
    var tipo = $(this).attr("data-tipo");

    // Volvemos a pintar los discos, pero solo los de ese tipo
    pintarDiscos(tipo);

    // Subrayamos solo el filtro pulsado
    $(".filtro").removeClass("is-activo");
    $(this).addClass("is-activo");

});


// CORAZON ME GUSTA


$("#discos").on("click", ".disco__favorito", function () {

    $(this).toggleClass("is-favorito");                   // se pone verde
    $(this).find("i").toggleClass("fa-regular fa-solid"); // de vacío a relleno

});

// VENTANA MODAL

// Abrir al pulsar "Ver más"
$("#discos").on("click", ".disco__boton", function () {

    // Sabemos qué disco es por su data-indice
    var indice = $(this).attr("data-indice");
    var disco = discos[indice];

    // Metemos sus datos en la modal
    $("#modal-foto").attr("src", disco.foto);
    $("#modal-foto").attr("alt", disco.nombre);
    $("#modal-titulo").text(disco.nombre + " - " + disco.artista);

    // La enseñamos
    $("#modal").addClass("is-abierta");

});

// Cerrar con la X
$("#modal-cerrar").on("click", function () {
    $("#modal").removeClass("is-abierta");
});

// Cerrar al hacer clic en el fondo oscuro
$("#modal").on("click", function (event) {
    if (event.target === this) {
        $("#modal").removeClass("is-abierta");
    }
});

// CORAZÓN 
$(document).on("click", ".disco__favorito", function () {

    $(this).toggleClass("is-favorito");
    $(this).find("i").toggleClass("fa-regular fa-solid");

    if ($(".disco__favorito.is-favorito").length > 0) {
        $("#carpeta-favoritos").fadeIn(200);
    } else {
        $("#carpeta-favoritos").fadeOut(200);
    }

});
