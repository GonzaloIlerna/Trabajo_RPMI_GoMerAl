let btn = document.getElementById("btn")

function empezar(){
    document.getElementById("inicio").style.display = "none"
    document.getElementById("principal").style.display = "block"
}

btn.addEventListener("click",empezar)


let nclicks=0;

$("#M_12").hide()
// corazón oculto
$("#M_1").click(function(){
    nclicks++;
    console.log(nclicks);
if(nclicks==12){
        
        $("#M_12").css({
            "left": "2420px",
            "top": "150px",
            

            
        }
        )

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
          $("#M_2").css("transform" , "rotate(360deg) scale(0)");
        //   $("#M_2").css("transform" , "scale(.0)");
          
     }
 })
// El espacio aparece cuando agarras la luna e inmediatamente ésta gira al soltarla
_____________________________________________________________________________________
$("#M_3").click( function( event ) {
    event.preventDefault();
});

// se pinta en la pizarra