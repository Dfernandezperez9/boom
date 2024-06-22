const INPUT_USUARIO = document.getElementById("userInput");
const CONTENEDOR_CUENTA_ATRAS = document.getElementById("countdown");
const CONTENEDOR_RESULTADO = document.getElementById("result");
const BOTON = document.getElementById("restart");
const PARRAFO = document.createElement("p");
const PARRAFO2 = document.createElement("P");

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
    PARRAFO2.innerText = `${referencia} VS ${valor} Has salvado al mundo!!`;
  }
  else {
    PARRAFO2.innerText = `${referencia} VS ${valor} Lo siento, el mundo ha explosionado...`;
  }
}



['keydown', 'blur'].forEach( event => {
        INPUT_USUARIO.addEventListener(event, () => {
            PARRAFO.classList.add("animacion")
            PARRAFO2.classList.add("animacion2")
        cuentaAtras()
        setTimeout(() => {
            displayResultados()
        }, 7000)
    })
})



BOTON.addEventListener("click", () => {
    location.reload()
})
     


































// const RESULTADO = new Promise((resolve, reject) => {})



/*const selectElement = document.querySelector(".nieve");
const resultado = document.querySelector(".resultado");

selectElement.addEventListener("change", (event) => {
  resultado.textContent = `Te gusta el sabor ${event.target.value}`;
});*/