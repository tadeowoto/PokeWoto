
let ataqueJugador 
let ataqueEnemigo
let resultadoMensaje
let vidaJugador = 3
let vidaEnemigo = 3

/* Añade los eventListener a los botones para que comience a funcionar el juego */
function iniciarJuego(){

    let botonMascota = document.getElementById('boton-seleccionar')
    botonMascota.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)
    let botonFantasma = document.getElementById('boton-fantasma')
    botonFantasma.addEventListener('click',ataqueFantasma)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
    botonReiniciar.style.display='none'

    let ataque = document.getElementById('ataque-container')
    ataque.style.display='none'

    let empezarAtaque = document.getElementById('lets-go-button')
    empezarAtaque.addEventListener('click',empezar)

}
 


/* Resuelve la batalla y esconde los botones en caso de ya haber finalizado el enfrentamiento */
function resolucionBatalla(){

    let sectionResultado = document.getElementById('resultado')
    let parrafoRTDO = document.createElement('p')

    sectionResultado.appendChild(parrafoRTDO)
    
    if(vidaEnemigo==0){
        parrafoRTDO.innerHTML= 'Felicitaciones, ganaste el enfrentamiento Pokemon'
    } else{
        parrafoRTDO.innerHTML= 'Que mal, perdiste el enfrentamiento Pokemon'
    }

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonFantasma = document.getElementById('boton-fantasma')
    botonFantasma.disabled = true

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
    botonReiniciar.style.display='block'

}

/* improme el resultado del turno*/
function mensajeResultadoTurno(){

    let sectionResultado = document.getElementById('resultado')
    let parrafoRTDO = document.createElement('p')

    sectionResultado.appendChild(parrafoRTDO)
    parrafoRTDO.innerHTML= resultadoMensaje


}

/* Esta funcion dictamina el resultado del turno */
function enfrentamientoPokemon(){

    let vidaJugadorSpan = document.getElementById('vidasJugador')
    let vidaEnemigoSpan = document.getElementById('vidasEnemigo')

    if (vidaEnemigo==0){
        resolucionBatalla()
    } else if (vidaJugador==0){
        resolucionBatalla()
    } else{
        if(ataqueJugador==ataqueEnemigo){
            resultadoMensaje='Empate'
        } else if ((ataqueJugador == 'Fuego') && (ataqueEnemigo == 'Fantasma')){
            resultadoMensaje='Ganaste'
            vidaEnemigo --
            vidaEnemigoSpan.innerHTML= vidaEnemigo
        } else if ((ataqueJugador == 'Agua') && (ataqueEnemigo == 'Fuego')){
            resultadoMensaje = 'Ganaste'
            vidaEnemigo--
            vidaEnemigoSpan.innerHTML= vidaEnemigo
        } else if ((ataqueJugador == 'Fantasma') && (ataqueEnemigo == 'Agua')){
            resultadoMensaje = 'Ganaste'
            vidaEnemigo--
            vidaEnemigoSpan.innerHTML= vidaEnemigo
        } else{
            resultadoMensaje = 'Perdiste'
            vidaJugador--
            vidaJugadorSpan.innerHTML = vidaJugador
        }
        mensajeResultadoTurno()
    }


}

/* Esta funcion crea el mensaje de como fueron los ataques tanto del jugador y de la maquina */
function crearMensaje(){
    let sectionResultado = document.getElementById('resultado')
    let parrafo= document.createElement('p')

    sectionResultado.appendChild(parrafo)        

    if(ataqueJugador==ataqueEnemigo){
        parrafo.innerHTML = 'Tu pokemon ataco con '+ ataqueJugador +' y el pokemon enemigo tambien ataco con '+ ataqueEnemigo +'!'
    } else{
        parrafo.innerHTML = 'Tu pokemon ataco con '+ ataqueJugador +' y el pokemon enemigo ataco con '+ ataqueEnemigo +'!'
    }

    enfrentamientoPokemon()

}


/* Usa de vuelta la funcion de aleatorio para elegir ataque */
function elegirAtaqueEnemigo(){

    let ataqueAleatorioEnemigo = aleatorio(1,3)

    if(ataqueAleatorioEnemigo==1){
        ataqueEnemigo= 'Fuego'
    }else if (ataqueEnemigo==2){
        ataqueEnemigo= 'Agua'
    }else{
        ataqueEnemigo= 'Fantasma'
    }

    crearMensaje()

}


/* estas funciones designan el ataque que eligio el jugador a traves del boton del html  y llaman a la funcion de ataque del enemigo*/

function ataqueAgua() {
    if (vidaJugador > 0 && vidaEnemigo > 0) {
        ataqueJugador = 'Agua';
        elegirAtaqueEnemigo();
    } else {
        resolucionBatalla();
    }
}

function ataqueFuego() {
    if (vidaJugador > 0 && vidaEnemigo > 0) {
        ataqueJugador = 'Fuego';
        elegirAtaqueEnemigo();
    } else {
        resolucionBatalla();
    }
}

function ataqueFantasma() {
    if (vidaJugador > 0 && vidaEnemigo > 0) {
        ataqueJugador = 'Fantasma';
        elegirAtaqueEnemigo();
    } else {
        resolucionBatalla();
    }
}




/* Esta funcion usa el checked de el document para ver que tipo de Pokemon se eligio y cambia el mensaje con el Inner en el HTML */
function seleccionarMascotaJugador(){
    let seleccionarMascota = document.getElementById('select-poke')
    seleccionarMascota.style.display = 'none'
    let seleccionarAtaque = document.getElementById('ataque-container')
    seleccionarAtaque.style.display = 'flex'   


    let input1=document.getElementById('Gengar').checked
    let input2=document.getElementById('Pikachu').checked
    let input3=document.getElementById('Moreno').checked
    let nombreMascotaJugadorSpan = document.getElementById('nombre-pokemon-jugador')


    if(input1){
        nombreMascotaJugadorSpan.innerHTML = 'Gengar'
    } else if (input2){
        nombreMascotaJugadorSpan.innerHTML = 'Pikachu'
    } else if(input3){
        nombreMascotaJugadorSpan.innerHTML = 'Moreno'
    } else{
        alert('Por favor seleccione un pokemon')
    }
    seleccionarMascotaEnemigo()
}




/* Llama a la funcion aleatorio y crea un numero del 1 al 3, dependiendo el numero se le asigna un Pokemon */
function seleccionarMascotaEnemigo(){
    
    let nombreMascotaEnemigoSpan = document.getElementById('nombre-pokemon-enemigo')
    let numeroPokemonEnemigo = aleatorio(1,3)
 
    if(numeroPokemonEnemigo==1){
        nombreMascotaEnemigoSpan.innerHTML = 'Gengar'
    } else if (numeroPokemonEnemigo==2){
        nombreMascotaEnemigoSpan.innerHTML = 'Pikachu'
    } else if(numeroPokemonEnemigo==3){
        nombreMascotaEnemigoSpan = 'Moreno'
    }


}


function reiniciarJuego(){
 
    location.reload()


}


/* Usa Math para crear numeros aleatorios entre un minimo y un maximo */
function aleatorio(min,max){

    return Math.floor(Math.random()* (max-min + 1) + min)

}


/* Sirve para que cuando termine de cargar el HTML llame a la funcion iniciarJuego */
window.addEventListener('load', iniciarJuego)


