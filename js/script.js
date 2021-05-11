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
    if (fondo == 1){
        $("#principal").css(
            "background", "linear-gradient(30deg,lightsalmon,lightblue,lightpink)"
        )
        fondo = 2
    }else if (fondo == 2){
        $("#principal").css(
            "background", "radial-gradient(1000px,salmon,lightcyan,pink)"
        )
        fondo = 3
    }else if (fondo == 3){
        $("#principal").css(
            "background", "linear-gradient(lightsalmon,lightblue,lightpink)"
        )
        fondo = 4
    }else if (fondo == 4){
        $("#principal").css(
            "background", "radial-gradient(1500px,lightseagreen,white,lightcoral)"
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

//efecto blur
$("#malla_2").droppable({
    accept:$("#A_1"),
    drop: function( event, ui ) {
        $("#A_1").css("-webkit-filter", "blur(10px)"),
        $("#A_1").css("scale", "1"),
        $("#A_1").css("rotate", "0deg")
    }
})

//blur + escala
$("#malla_3").droppable({
    accept:$("#A_1"),
    drop: function( event, ui ) {
        $("#A_1").css("-webkit-filter", "blur(10px)"),
        $("#A_1").css("scale", "1.5"),
        $("#A_1").css("rotate", "0deg")
    }
})

//escala
$("#malla_4").droppable({
    accept:$("#A_1"),
    drop: function( event, ui ) {
        $("#A_1").css("-webkit-filter", "blur(0px)"),
        $("#A_1").css("scale", "1.5"),
        $("#A_1").css("rotate", "0deg")
    }
})

//rotar 2vueltas
$("#malla_5").droppable({
    accept:$("#A_1"),
    drop: function( event, ui ) {
        $("#A_1").css("-webkit-filter", "blur(0px)"),
        $("#A_1").css("scale", "1"),
        $("#A_1").css("rotate","900deg")
    }
})

//rotar
$("#malla_6").droppable({
    accept:$("#A_1"),
    drop: function( event, ui ) {
        $("#A_1").css("-webkit-filter", "blur(0px)"),
        $("#A_1").css("scale", "1"),
        $("#A_1").css("rotate", "180deg")
    }
})



// / / / / / / / / / / / / / A_2

$("#A_2").click(function(){
    $("#A_2").css("scale","2.5")
})

$("#A_2").dblclick(function(){
    $("#A_2").css("scale","1.5")
})
    




// / / / / / / / / / / / / / A_3



//Empieza la par de Java Script de Gonzalo

// Elementos que estan ocultos
$("#G_6c").hide();

$("#G_7c").hide();


// Funciones para cambiar el fondo

$("#G_1").click(function(){
    $("#principal").css("background", "repeating-radial-gradient(black, black 5px, white 5px, white 10px)")
})

$("#G_3").click(function(){
    $("#principal").css("background", "linear-gradient(30deg, rgb(255, 190, 241), white)")
})


//Función del drop del ojo de los iluminatis 

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



//Hacer que se pueda dibujar en todo el fondo de la pantalla


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


//Acaba la parte de js de las cosas de Gonzalo




let nclicks=0;

$("#m_1a").hide()
// corazón oculto
$("#M_1").click(function(){
    nclicks++;
    console.log(nclicks);
    if(nclicks==12){
        
        $("#m_1a").css({
            "left": "2420px",
            "top": "150px",
            
        })

        $("#m_1a").show()
        // document.getElementById("M_1").style.left="30px";
        // corazon aparece
        $("#M_1").hide()
        // el huevo se esconde
    }
})

$("#m_2a").hide();

$("#M_2").draggable({ 
    start: function() {
        $("#m_2a").show();
        
    }
})
 
$("#m_2a").droppable({
     drop: function (){
          $("#M_2").css("transform" , "rotate(360deg) scale(0)");
     }
})

// El icon aparece cuando agarras la luna e inmediatamente ésta gira al soltarla


$("#M_3").click( function( event ) {
    event.preventDefault();
});

// se pinta en la pizarra
