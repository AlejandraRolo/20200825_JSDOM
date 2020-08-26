/* Metodo para mostrar mensajes */

function mensajeAlert(){
    alert("Hola Mundooo!!!");
}

/* Prompt */
function cajitaDeTexto(){
    var nombre = prompt('Ingrese su nombre');
    // no es recomendable utilizar el document.write ya que se reemplaza todo el documento.
    // en este ejemplo cuando se muestra el h1 reemplaza todo el documento, los demás elementos de la página se borran, se sobreescriben.
    document.write("<h1> Su nombre es " + nombre + "</h1>"); 
}

/*Confirm */
function confirmar(){
    var respuesta = confirm("¿Esta seguro que desea eliminar el archivo?");

    if(respuesta == true){
        alert("Archivo eliminado correctamente!!");
    }else{
        alert("Archivo NO eliminado");
    }
}

function consola(){
    console.log("Soy tu mejor amigo para los errores");
}


/* DOM */

var imagen = document.getElementById("imgpajaro");

/* Esta sintaxis define los mismo que con la sintaxis de abajo
esta manera de llamar la función se le llama: funcion tradicional
imagen.addEventListener("click", 
function(){
})
*/

/* establecer eventos sobre la imagen, esta manera de llamar la función se le llama: funcion flecha
Aqui estamos invocando el evento click
imagen.addEventListener("click", () =>{
    alert("Soy el DOM");
})
*/

/* Aqui estamos invocando el evento de doble click */

imagen.addEventListener("dblclick", () =>{
    /*Modificamos el CSS */
    imagen.style.width = "500px";
    imagen.style.border = "5px solid black";
})


/* Eventos de Mouse */

/* Puedo acceder directamente al evento del control sin necesidad de crear una variable
document.getElementById("box")
    .addEventListener("mouseenter", ()=>{
})
*/

var contenedor = document.getElementById("box");

/* Aqui estamos invocando el evento mouseenter que es cuando pasamos el mouse sobre el elemento */
contenedor.addEventListener("mouseenter", ()=>{
    // classList: Permite acceder a la lista de clases que tenemos dentro de un CSS, la referencia al CSS debe estar en el html donde este la referencia js para enlazar todo.
    contenedor.classList.replace("box", "cambio1");
})

/* Aqui estamos invocando el evento mouseleave que es cuando retiramos el mouse del elemento */
contenedor.addEventListener("mouseleave", ()=>{
    // classList: Permite acceder a la lista de clases que tenemos dentro de un CSS, la referencia al CSS debe estar en el html donde este la referencia js para enlazar todo.
    contenedor.classList.replace("cambio1", "box");
})

/* Aqui estamos invocando el evento mousemove que es cuando me muevo dentro del elemento */
contenedor.addEventListener("mousemove", ()=>{
    console.log("El mouse se esta moviendo");
})

/* Aqui estamos invocando el evento mousedown que es cuando el navegador identifica que se ha dado click */
contenedor.addEventListener("mousedown", ()=>{
    console.log("Has dado click dentro del div");
})

/* Aqui estamos invocando el evento mousedown que es cuando el navegador identifica que se ha levantado click */
contenedor.addEventListener("mouseup", ()=>{
    console.log("Has levantado el click dentro del div");
})


/* Eventos de teclado */

var teclado = document.getElementById("teclado");

/* Aqui estamos invocando el evento keydown que es cuando precionamos una tecla 
teclado.addEventListener("keydown", ()=>{
    console.log("Has precionado una tecla");
})
*/

/*
teclado.addEventListener("keypress", ()=>{
    console.log("Tienes la tecla sostenida");
})*/


/* Acceder a las propiedades del evento */

/* si no se coloca el "e" se toma todas las teclas del teclado */

teclado.addEventListener("keyup", (e)=>{
    // ver información del evento
    //console.log(e);

    // obtener la tecla precionada
    console.log(e.key);

    if(e.key.toLowerCase() === "w"){
        alert("vas hacia adelante")
    }
})


/* OBJETO EVENTO */

var padre = document.getElementById("padre");

/*
padre.addEventListener("click", (e)=>{
    console.log(e.target.textContent);
    e.target.style.background = "red";

    
    e.target.classList.add("color")
    e.target.classList.add("nombreClase") de esta manera podemos agregar una clase al elemento, el archivo CSS se contiene la clase debe estar referenciada en el html 
}) */


// Asignar color a cada div nodo
padre.addEventListener("click", (e)=>{
    var nodo = e.target.textContent;
    console.log(nodo);

    switch(parseInt(nodo)){
        case 1:
            e.target.classList.add("color1")
            break;
        case 2:
            e.target.classList.add("color2")
            break;
        case 3:
            e.target.classList.add("color3")
            break;
        case 4:
            e.target.classList.add("color4")
            break;
        case 5:
            e.target.classList.add("color5")
            break;
        case 6:
            e.target.classList.add("color6")
            break;
        case 7:
            e.target.classList.add("color7")
            break;
        case 8:
            e.target.classList.add("color8")
            break;
        default:
            alert("Opción no disponible.")
            break;
    }
})


/* CREAR ELEMENTOS DENTRO DE UN NODO O ETIQUETA */

var lista = document.getElementById("lista"); // tener en cuenta agregar primero, el nodo principal
var agregar = document.getElementById("agregar");

agregar.addEventListener("click", ()=>{
    // Obtener los valores ingresados en el input
    var texto = document.getElementById("texto").value;

    // crear la etiqueta "li" para la lista
    var etiqueta = document.createElement("li");

     // asignamos el valor. Dentro de la etiqueta voy insertando el texto que tiene el input
    etiqueta.textContent = texto;  // propiedad text content es donde reposa el texto del elemento

    // Agregamos la etiqueta a la lista
    lista.appendChild(etiqueta);
})

