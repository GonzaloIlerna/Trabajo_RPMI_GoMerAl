let btn = document.getElementById("btn")

function empezar(){
    document.getElementById("inicio").style.display = "none"
    document.getElementById("principal").style.display = "block"
}

btn.addEventListener("click",empezar)


let nclicks=0;

$("#M_2").hide()

$("#M_1").click(function(){
    nclicks++;
    console.log(nclicks);
if(nclicks==15){
        
        $("#M_2").css({
            "left": "2420px",
            "top": "60px",
            

            
        }
        )

        $("#M_2").show()
        // document.getElementById("M_1").style.left="30px";
}
});



