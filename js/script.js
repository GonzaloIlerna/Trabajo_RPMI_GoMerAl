let btn = document.getElementById("btn")

function empezar(){
    document.getElementById("inicio").style.display = "none"
    document.getElementById("principal").style.display = "block"
}

btn.addEventListener("click",empezar)


let nclicks=0;
let explotar=15;


$("#M_1").click(function(){
    nclicks++
    console.log(nclicks)

});

if(explotar=15){
    if(nclicks=15){
        alert(explotar)
    }
}