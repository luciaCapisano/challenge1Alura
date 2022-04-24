var botonDesencriptar = document.querySelector(".button-desencriptar");

botonDesencriptar.addEventListener("click", dencriptarTexto);


function dencriptarTexto() {
	event.preventDefault();
	var textoInput = document.querySelector('.input-texto');
	var textoAdesencriptar = textoInput.value;

    var textoDesencriptado = "";
    textoDesencriptado = textoAdesencriptar.replace(/enter/g, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/g, "a");
    textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");

    var textoEnc = document.querySelector(".texto-procesado"); 
    textoEnc.textContent = textoDesencriptado;
}
