//Para cambiar la pantalla de inicio a la principal
let btn = document.getElementById("btn")

function empezar(){
    document.getElementById("inicio").style.display = "none"
    document.getElementById("principal").style.display = "block"
};

btn.addEventListener("click",empezar)

//_____________________________________________________//

//Se cambia el fondo al hacer click

let fondo = 1;

$("#principal").dblclick(function(){
    if (fondo ==1){
        $("#principal").css(
            "background", "linear-gradient(30deg,lightsalmon,lightblue,lightpink)"
        )
        fondo = 2

    }else if (fondo == 2){
        $("#principal").css(
            "background", "radial-gradient(1000px,salmon,lightcyan,pink)",
        )
        fondo = 3
    }else if (fondo == 3){
        $("#principal").css(
            "background", "circular-gradient(135deg,lightseagreen,lightcoral,#c18ef1)"
        )
        fondo = 1
    }else if (fondo == 4){
        $("principal").css(
            "background", "radial-gradient(lightsalmon,lightblue,lightpink)"
        )
        fondo = 5
    }else if (fondo == 5){
        $("principal").css(
            "background", "repeating-linear-gradient(lightsalmon,lightblue,lightpink)"
        )
        fondo = 1
    }
})


// INTERACCIONES DE LOS ELEMENTOS
//Los elementos se arrastran
$("#A_1").draggable();
$("#A_2").draggable(); 
$("#A_3").draggable(); 

// / / / / / / / / / / / / / A_1

//El comecocos activa interacciones segun su ubicación en este grid
//   _____________________________
//  |         |         |         |
//  |    1    |    2    |    3    |
//  |_________|_________|_________|
//  |         |         |         |
//  |    4    |    5    |    6    |
//  |_________|_________|_________|


$("#malla_1").droppable({
    accept:$("#A_1"),
    drop: function( event, ui ) {
        $("#A_1").css("-webkit-filter", "blur(0px)"),
        $("#A_1").css("scale", "1"),
        $("#A_1").css("rotate", "0deg")
    }
})

$("#malla_2").droppable({
    accept:$("#A_1"),
    drop: function( event, ui ) {
        $("#A_1").css("-webkit-filter", "blur(10px)"),
        $("#A_1").css("scale", "1"),
        $("#A_1").css("rotate", "0deg")
    }
})

$("#malla_3").droppable({
    accept:$("#A_1"),
    drop: function( event, ui ) {
        $("#A_1").css("-webkit-filter", "blur(10px)"),
        $("#A_1").css("scale", "1.5"),
        $("#A_1").css("rotate", "0deg")
    }
})

$("#malla_4").droppable({
    accept:$("#A_1"),
    drop: function( event, ui ) {
        $("#A_1").css("-webkit-filter", "blur(0px)"),
        $("#A_1").css("scale", "1.5"),
        $("#A_1").css("rotate", "0deg")
    }
})

$("#malla_5").droppable({
    accept:$("#A_1"),
    drop: function( event, ui ) {
        $("#A_1").css("-webkit-filter", "blur(0px)"),
        $("#A_1").css("scale", "1"),
        $("#A_1").css("rotate","900deg")
    }
})

$("#malla_6").droppable({
    accept:$("#A_1"),
    drop: function( event, ui ) {
        $("#A_1").css("-webkit-filter", "blur(0px)"),
        $("#A_1").css("scale", "1"),
        $("#A_1").css("rotate", "180deg")
    }
})



// / / / / / / / / / / / / / A_2





// / / / / / / / / / / / / / A_3

$("#A_3").droppable({
    accept:$("#A_2"),
    drop: function( event, ui ) {
        $("#A_2").css("animation", "running");
    }
})










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
let nclicks=0;

$("#M_12").hide()
// corazon oculto
$("#M_1").click(function(){
    nclicks++;
    console.log(nclicks);
if(nclicks==12){
        
        $("#M_12").css({
            "left": "2420px",
            "top": "150px",
            

            
        })

        $("#M_12").show()
        // document.getElementById("M_1").style.left="30px";
        // corazon aparece
        $("#M_1").hide()
        // el huevo se esconde
}
});

$("#M_22").hide();

 $("#M_2").draggable({ 
    start: function() {
        $("#M_22").show();
        
    }
})
 
 $("#M_22").droppable({
     drop: function (){
          $("#M_2").css("transform" , "rotate(360deg)");
     }
 })
 
//Para refrescar la página si ya la has cafreado mucho
let btn2 = document.getElementById("btn2")

function limpiar(){
    document.getElementById("#principal").reset();
};

btn2.addEventListener("click",limpiar)