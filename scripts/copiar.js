var textoProcesado = document.querySelector(".texto-procesado"); 
var boton = document.querySelector('.button-copiar');

boton.addEventListener('click', copiarTexto);

function copiarTexto(){
    navigator.clipboard.writeText(textoProcesado.textContent)
         .then(() => alert("Texto copiado correctamente"));
};
