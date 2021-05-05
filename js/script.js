let btn = document.getElementById("btn")

function empezar(){
    document.getElementById("inicio").style.display = "none"
    document.getElementById("principal").style.display = "block"
}

btn.addEventListener("click",empezar)


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
            

            
        }
        )

        $("#M_12").show()
        // document.getElementById("M_1").style.left="30px";
        // corazon aparece
        $("#M_1").hide()
        // el huevo se esconde
}
});

$("#M_2").draggable()
$("#M_2").droppable()

$("#M_22").hide()
$("#M_22").show()