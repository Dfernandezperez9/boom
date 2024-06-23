const INPUT_USUARIO = document.getElementById("userInput");
const CONTENEDOR_CUENTA_ATRAS = document.getElementById("countdown");
const CONTENEDOR_RESULTADO = document.getElementById("result");
const BOTON = document.getElementById("restart");
const PARRAFO = document.createElement("p");
const PARRAFO2 = document.createElement("P");
const LLAMA = document.querySelector(".llama");
const MECHA = document.querySelector(".mecha2");
const MECHA1 = document.querySelector(".mecha1");
const REFLEJO = document.querySelector(".reflejo");
const REFLEJO1 = document.querySelector(".reflejo2");
const FALLASTE = document.querySelector(".cuerpo");
const ENUNCIADO = document.querySelector(".enunciado");
const ENCABEZADO = document.getElementById("titulo");



PARRAFO.classList.add("parrafo1");
PARRAFO2.classList.add("parrafo2");

const VALORES = [1, 2, 3]


CONTENEDOR_CUENTA_ATRAS.appendChild(PARRAFO)
CONTENEDOR_RESULTADO.appendChild(PARRAFO2)



function numeroAleatorio () {
    return Math.floor(Math.random() * 3)
}





function cuentaAtras () {
    return new Promise(() => {
    setTimeout(() => {
        PARRAFO.innerText = "0"
    }, 6000)

    setTimeout(() => {
        PARRAFO.innerText = "1"
    }, 5000)

    setTimeout(() => {
        PARRAFO.innerText = "2"
    }, 4000)

    setTimeout(() => {
        PARRAFO.innerText = "3"
    }, 3000)

    setTimeout(() => {
        PARRAFO.innerText = "4"
    }, 2000)

    setTimeout(() => {
        PARRAFO.innerText = "5"
    }, 1000)
})
}

function displayResultados () {
let referencia = VALORES[numeroAleatorio()];
let valor = INPUT_USUARIO.value;

  if (valor == referencia) {
    LLAMA.classList.add("vanish");
    MECHA.classList.add("vanish");
    PARRAFO2.classList.add("parrafo2Win");
    PARRAFO2.innerText = `${referencia} VS ${valor} Has salvado al mundo!!`;
    
}
  else {
    FALLASTE.classList.add("uDied");
    FALLASTE.classList.add("background");
    LLAMA.classList.add("background");
    MECHA.classList.add("background");
    MECHA1.classList.add("background");
    REFLEJO.classList.add("background");
    REFLEJO1.classList.add("background");
    PARRAFO2.innerText = `${referencia} VS ${valor} Lo siento, el mundo ha explosionado...`;
  }
}



['keydown', 'blur'].forEach( event => {
        INPUT_USUARIO.addEventListener(event, () => {
            ENCABEZADO.classList.add("vanish");
            INPUT_USUARIO.classList.add("enunciado2");
            ENUNCIADO.classList.add("enunciado2");
            PARRAFO.classList.add("animacion");
            PARRAFO2.classList.add("animacion2");
        cuentaAtras()
        setTimeout(() => {
            displayResultados()
        }, 7000)
    })
})



BOTON.addEventListener("click", () => {
    location.reload()
})
     