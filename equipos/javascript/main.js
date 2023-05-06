// //DOM
// let selector = document.querySelectorAll("a");
// selector.forEach(function(selector){
//     console.log(selector)
// });

// let celdas = document.querySelectorAll("td");

// celdas.forEach(function(td){
//     td.addEventListener('click', function(){
//         console.log(this)
//     })
// });

//Obtener los elementos de la clase .close
let links = document.querySelectorAll('.close');
//Recorrerlos
links.forEach(function(link){

//Agregar un evento click a cada uno de ellos
    link.addEventListener('click', function(evento){
        evento.preventDefault()
            let content = document.querySelector('.content');
            //quitar la animacion de entrada
            content.classList.remove('animate__flipInX');
            //a;adir una clase de salida a los close
            content.classList.add("animate__fadeOutUp");
            //poner un timer para que haga una accion en 1000ms
            setTimeout(function(){
                location.href = "../";
            },1000);
            

        return false
    })
});

// let iconos = document.querySelectorAll("i");

// iconos.forEach(function(icono){
//     icono.classList.remove("fa-star")
// });