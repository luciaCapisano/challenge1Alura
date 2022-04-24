var textoProcesado = document.querySelector(".texto-procesado"); 
var boton = document.querySelector('.copiar');

boton.addEventListener('click', copiarTexto);

function copiarTexto(){
    alert("Texto copiado correctamente");
    navigator.clipboard.writeText(textoProcesado.textContent);
};

