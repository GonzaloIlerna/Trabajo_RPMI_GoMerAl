//Para cambiar la pantalla de inicio a la principal

let btn = document.getElementById("btn")

function empezar(){
    document.getElementById("inicio").style.display = "none"
    document.getElementById("principal").style.display = "block"
}

btn.addEventListener("click",empezar)

/////////////////////////

$ ("#A_1").click(function(){
    $("body").css("background", "linear-gradient(30deg,pink,green)")
})