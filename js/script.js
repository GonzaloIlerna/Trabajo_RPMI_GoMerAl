let btn = document.getElementById("btn");

function empezar(){
    document.getElementById("inicio").style.display = "none"
    document.getElementById("principal").style.display = "block"
};

btn.addEventListener("click",empezar);

$("#G_6c").hide();

$("#G_7c").hide();

$("#G_1").click(function(){
    $("#principal").css("background", "repeating-radial-gradient(black, black 5px, white 5px, white 10px)")
})

$("#G_3").click(function(){
    $("#principal").css("background", "linear-gradient(30deg, rgb(255, 190, 241), white)")
})

let texto = document.getElementById("expl");

let ocultar = document.getElementById("G_5");

function quitar(){
    document.getElementById("expl").style.display = "none"
    document.getElementById("p2").style.display = "none"
};

ocultar.addEventListener("dblclick",quitar);

    $("#G_5").droppable({
             
        drop: function(event, ui){
            if(G_7bool==true){
            $("#G_7c").show();
            $("#G_7").hide();
        }
        if (G_6bool==true){
            $("#G_6c").show();
            $("#G_6").hide();
        }
    }
        
});


let G_7bool=false;

let G_6bool=false;


$( "#G_6" ).draggable({
    start: function( event, ui ) {
            G_6bool=true;
    },
    stop: function( event, ui ) {
      G_6bool=false;
  }
  });

$( "#G_7" ).draggable({
    start: function( event, ui ) {
            G_7bool=true;
    },
    stop: function( event, ui ) {
      G_7bool=false;
  }
  });

$("#G_2").draggable();

$("#G_1").draggable();



// Hacer un dragabble revert y tambien un dropable que cuando sea afirmativo el 
// el dropable se desactive el dragable y se quede donde esta el objeto/imagen
// hacer que se desactive todo y no se pueda mover mas ese objeto


    // VARIABLES
    //======================================================================
    let miCanvas = document.querySelector('#pizarra');
    let lineas = [];
    let correccionX = 0;
    let correccionY = 0;
    let pintarLinea = false;
    // Marca el nuevo punto
    let nuevaPosicionX = 0;
    let nuevaPosicionY = 0;

    let posicion = miCanvas.getBoundingClientRect()
    correccionX = posicion.x;
    correccionY = posicion.y;

    miCanvas.width = 2500;
    miCanvas.height = 2000;

    //======================================================================
    // FUNCIONES
    //======================================================================

    /**
     * Funcion que empieza a dibujar la linea
     */
    function empezarDibujo () {
        pintarLinea = true;
        lineas.push([]);
    };
    
    /**
     * Funcion que guarda la posicion de la nueva línea
     */
    function guardarLinea() {
        lineas[lineas.length - 1].push({
            x: nuevaPosicionX,
            y: nuevaPosicionY
        });
    }

    /**
     * Funcion dibuja la linea
     */
    function dibujarLinea (event) {
        event.preventDefault();
        if (pintarLinea) {
            let ctx = miCanvas.getContext('2d')
            // Estilos de linea
            ctx.lineJoin = ctx.lineCap = 'round';
            ctx.lineWidth = 1;
            // Color de la linea
            ctx.strokeStyle = '#00000';
            // Marca el nuevo punto
            if (event.changedTouches == undefined) {
                // Versión ratón
                nuevaPosicionX = event.layerX;
                nuevaPosicionY = event.layerY;
            } else {
                // Versión touch, pantalla tactil
                nuevaPosicionX = event.changedTouches[0].pageX - correccionX;
                nuevaPosicionY = event.changedTouches[0].pageY - correccionY;
            }
            // Guarda la linea
            guardarLinea();
            // Redibuja todas las lineas guardadas
            ctx.beginPath();
            lineas.forEach(function (segmento) {
                ctx.moveTo(segmento[0].x, segmento[0].y);
                segmento.forEach(function (punto, index) {
                    ctx.lineTo(punto.x, punto.y);
                });
            });
            ctx.stroke();
        }
    }

    /**
     * Funcion que deja de dibujar la linea
     */
    function pararDibujar () {
        pintarLinea = false;
        guardarLinea();
    }

    //======================================================================
    // EVENTOS
    //======================================================================

    // Eventos raton
    miCanvas.addEventListener('mousedown', empezarDibujo, false);
    miCanvas.addEventListener('mousemove', dibujarLinea, false);
    miCanvas.addEventListener('mouseup', pararDibujar, false);

    // Eventos pantallas táctiles
    miCanvas.addEventListener('touchstart', empezarDibujo, false);
    miCanvas.addEventListener('touchmove', dibujarLinea, false);