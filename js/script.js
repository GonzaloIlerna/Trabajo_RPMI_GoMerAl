let btn = document.getElementById("btn");

function empezar(){
    document.getElementById("inicio").style.display = "none"
    document.getElementById("principal").style.display = "block"
};

btn.addEventListener("click",empezar);





// $("#G_2").click(function(){
//     $G_2

// });

$("#G_1").click(function(){
    $("#principal").css("background", "repeating-radial-gradient(black, black 5px, white 5px, white 10px)")
})

$("#G_3").click(function(){
    $("#principal").css("background", "linear-gradient(30deg, rgb(255, 190, 241), white)")
})

$("#G_4").click(function(){
    $("#principal").css("background", "linear-gradient(30deg, rgb(255, 190, 241), white)")
})

let texto = document.getElementById("expl");

$("#G_1").click(function(){
    $("#principal").css("background", "repeating-radial-gradient(black, black 5px, white 5px, white 10px)")
    $("#expl").css("color", "red")
    texto.textContent ='Ya lo has encontrado y para volver a cambiarlo pulsa el cuadrado de abajo a la derecha';
    console.log(texto.textContent);
})

$("#G_2").draggable();

$("#G_1").draggable();

let ocultar = document.getElementById("G_4");

function quitar(){
    document.getElementById("expl").style.display = "none"
    document.getElementById("p2").style.display = "none"
};

ocultar.addEventListener("dblclick",quitar);