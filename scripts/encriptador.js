var botonEncriptar = document.querySelector(".button-encriptar");

botonEncriptar.addEventListener("click", encriptarTexto);


function encriptarTexto() {
	event.preventDefault();
	var textoInput = document.querySelector('.input-texto');
	var textoAEncriptar = textoInput.value;
	var textoEncriptado = "";

    textoEncriptado = textoAEncriptar.replace(/e/g, "enter");
    textoEncriptado = textoEncriptado.replace(/i/g, "imes");
    textoEncriptado = textoEncriptado.replace(/a/g, "ai");
    textoEncriptado = textoEncriptado.replace(/o/g, "ober");
    textoEncriptado = textoEncriptado.replace(/u/g, "ufat");

    var textoEnc = document.querySelector(".texto-procesado"); 
    textoEnc.textContent = textoEncriptado;
}
