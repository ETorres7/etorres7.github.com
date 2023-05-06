//----------Animacion de tarjeta de cumplemes----------//
let btnPop1 = document.getElementById("btnOne")
let btnPop2 = document.getElementById("btnTwo")
let btnPop3 = document.getElementById("btnThree")
let btnPop4 = document.getElementById("btnFour")
let pop1 = document.getElementById("popupOne");
let pop2 = document.getElementById("popupTwo")
let pop3 = document.getElementById("popupThree")
let pop4 = document.getElementById("popupFour")
let picfood1 = document.getElementById("comidasOne")
let picpelis1 = document.getElementById("pelisOne")
let picmusic1 = document.getElementById("musicaOne")
let picplace1 = document.getElementById("lugaresOne")

btnPop1.addEventListener("click",()=>{
    pop1.style.visibility = 'visible'
    pop2.style.visibility = 'hidden'
    pop3.style.visibility = 'hidden'
    pop4.style.visibility = 'hidden'
    picfood1.style.visibility = 'hidden'
    picpelis1.style.visibility = 'visible'
    picmusic1.style.visibility = 'visible'
    picplace1.style.visibility = 'visible'
    // console.log("Abierto boton")
})
btnPop2.addEventListener("click",()=>{
    pop2.style.visibility = 'visible'
    pop1.style.visibility = 'hidden'
    pop3.style.visibility = 'hidden'
    pop4.style.visibility = 'hidden'
    picpelis1.style.visibility = 'hidden'
    picfood1.style.visibility = 'visible'
    picmusic1.style.visibility = 'visible'
    picplace1.style.visibility = 'visible'
    // console.log("Abierto boton")
})
btnPop3.addEventListener("click",()=>{
    pop3.style.visibility = 'visible'
    pop1.style.visibility = 'hidden'
    pop2.style.visibility = 'hidden'
    pop4.style.visibility = 'hidden'
    picmusic1.style.visibility = 'hidden'
    picfood1.style.visibility = 'visible'
    picpelis1.style.visibility = 'visible'
    picplace1.style.visibility = 'visible'
    // console.log("Abierto boton")
})
btnPop4.addEventListener("click",()=>{
    pop4.style.visibility = 'visible'
    pop1.style.visibility = 'hidden'
    pop2.style.visibility = 'hidden'
    pop3.style.visibility = 'hidden'
    picplace1.style.visibility = 'hidden'
    picfood1.style.visibility = 'visible'
    picpelis1.style.visibility = 'visible'
    picmusic1.style.visibility = 'visible'
    // console.log("Abierto boton")
})


let letters = document.querySelectorAll('.closing');
//Recorrerlos
letters.forEach(function(letter){

//Agregar un evento click a cada uno de ellos
letter.addEventListener('click', function(eve){
    eve.preventDefault()
        let contentMes = document.querySelector('.navi');
        //a;adir una clase de salida a los close
        contentMes.classList.add("animate__rollOut");
        //poner un timer para que haga una accion en 1000ms
        console.log("Todo acabo")
        setTimeout(function(){
            location.href = "../";
        },1000);
        
        return false
    })
});
