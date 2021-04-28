//Para cambiar la pantalla de inicio a la principal

let btn = document.getElementById("btn")

function empezar(){
    document.getElementById("inicio").style.display = "none"
    document.getElementById("principal").style.display = "block"
}

btn.addEventListener("click",empezar)

/////////////////////////

//Se cambia el fondo al hacer click

let degrad_1 = "linear-gradient(30,rgb(218, 97, 147),rgb(250, 189, 131))";
let degrad_2 = "radial-gradient(rgb(218, 97, 147),rgb(250, 189, 131))";

$ ("#principal").click(function(){

    if ($("#principal").style.background == degrad_1){
        $("#principal").style.background = degrad_2
    } else if ($("#principal").style.background == degrad_2){
        $("#principal").style.background = degrad_1
    }
})

$ ("#A_1").hover(function(){
    $("#A_1").css("background","radial-gradient(white,yellow.yellow.white)")
})

//Los elementos se arrastran
$("#A_1").draggable();
$("#A_2").draggable(); 


