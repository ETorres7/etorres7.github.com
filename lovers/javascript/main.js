let btnAbrir = document.getElementById("btn-abrir")
let btnAbrir2 = document.getElementById("btn-abrir-2")
let btnCerrar = document.getElementById("btn-cerrar");
let btnCerrar2 = document.getElementById("btn-cerrar-2");
let modal = document.getElementById("modal");
let modal2 = document.getElementById("modal2")

if (btnAbrir !== null ) {
    btnAbrir.addEventListener("click",()=>{
        modal.showModal();
    });
} else {
    console.log('Error: btnAbrir is null or undefined');
}
if (btnAbrir2 !== null ) {
    btnAbrir2.addEventListener("click",()=>{
        modal2.showModal();
    });
} else {
    console.log('Error: btnAbrir2 is null or undefined');
}

if (btnCerrar !== null ) {
btnCerrar.addEventListener("click",()=>{
    modal.close();
});
} else {
console.log('Error: btnCerrar is null or undefined');
}

if (btnCerrar2 !== null ) {
    btnCerrar2.addEventListener("click",()=>{
        modal2.close();
    });
    } else {
    console.log('Error: btnCerrar is null or undefined');
    }

//----------Animacion de tarjeta de cumplemes----------//
//Obtener los elementos de la clase .close
let links = document.querySelectorAll('.close');
//Recorrerlos
links.forEach(function(link){

//Agregar un evento click a cada uno de ellos
    link.addEventListener('click', function(evento){
        evento.preventDefault()
            let content = document.querySelector('.content');
            //a;adir una clase de salida a los close
            content.classList.add("animate__fadeOutUp");
            //poner un timer para que haga una accion en 1000ms
            setTimeout(function(){
                location.href = "../";
            },1000);
            

        return false
    })
});

let cards = document.querySelectorAll('.clocard');
//Recorrerlos
cards.forEach(function(card){

//Agregar un evento click a cada uno de ellos
    card.addEventListener('click', function(event){
        event.preventDefault()
            let contentMes = document.querySelector('.content-mes');
            //a;adir una clase de salida a los close
            contentMes.classList.add("animate__fadeOutUp");
            //poner un timer para que haga una accion en 1000ms
            setTimeout(function(){
                location.href = "../tabs/gifts.html";
            },1000);
            

        return false
    })
});