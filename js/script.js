//Para cambiar la pantalla de inicio a la principal

let btn = document.getElementById("btn")

function empezar(){
    document.getElementById("inicio").style.display = "none"
    document.getElementById("principal").style.display = "block"
}

btn.addEventListener("click",empezar)

//_____________________________________________________//

//Se cambia el fondo al hacer click

let fondo = 1;

$("#principal").click(function(){
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
            "background", "repeating-linear-gradient(135deg,lightseagreen,lightcoral,#c18ef1)"
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

//_____________________________________________________//

// INTERACCIONES DE LOS ELEMENTOS
//Los elementos se arrastran
$("#A_1").draggable();
$("#A_2").draggable(); 
$("#A_3").draggable(); 

// / / / / / / / / / / / / / A_1

//El comecocos activa interacciones segun su ubicación en un grid de 3x2

$("#m1").droppable({
    accept:$("#A_1"),
    drop: function( event, ui ) {
        $("#A_1").css("-webkit-filter", "blur(0px)"),
        $("#A_1").css("scale", "1"),
        $("#A_1").css("rotate", "0deg")
    }
})

$("#m2").droppable({
    accept:$("#A_1"),
    drop: function( event, ui ) {
        $("#A_1").css("-webkit-filter", "blur(10px)"),
        $("#A_1").css("scale", "1"),
        $("#A_1").css("rotate", "0deg")
    }
})

$("#m3").droppable({
    accept:$("#A_1"),
    drop: function( event, ui ) {
        $("#A_1").css("-webkit-filter", "blur(10px)"),
        $("#A_1").css("scale", "1.5"),
        $("#A_1").css("rotate", "0deg")
    }
})

$("#m4").droppable({
    accept:$("#A_1"),
    drop: function( event, ui ) {
        $("#A_1").css("-webkit-filter", "blur(0px)"),
        $("#A_1").css("scale", "1.5"),
        $("#A_1").css("rotate", "0deg")
    }
})

$("#m5").droppable({
    accept:$("#A_1"),
    drop: function( event, ui ) {
        $("#A_1").css("-webkit-filter", "blur(0px)"),
        $("#A_1").css("scale", "1"),
        $("#A_1").css("rotate","180deg")
    }
})

$("#m6").droppable({
    accept:$("#A_1"),
    drop: function( event, ui ) {
        $("#A_1").css("-webkit-filter", "blur(0px)"),
        $("#A_1").css("scale", "1"),
        $("#A_1").css("rotate", "180deg")
    }
})






