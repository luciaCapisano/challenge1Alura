var imagen = document.querySelector('.img-mostrar-texto');
var textoProcesado = document.querySelector(".texto-procesado");
var aviso = document.querySelector('.alerta');
var input = document.getElementById('.input-texto');

function ocultarImagen(){
        imagen.classList.add("invisible");
    }

function validarTexto(texto) {
    var vacio = textoVacio(texto);
	var carEspeciales = caracteresEspeciales(texto);
	var tildes = acentos(texto);
	var may = mayusculas(texto);

	if (vacio) {
		aviso.textContent = "El texto no puede estar vacio";
		return true;
	} else if (carEspeciales) {
		aviso.textContent = "El texto no puede contener caracteres especiales";
		return true;
	} else if (tildes) {
		aviso.textContent = "El texto no puede tener acentos";
		return true;
	} else if (may) {
		aviso.textContent = "El texto no puede contener mayusculas";
		return true;
	}
}

function textoVacio(texto) {
    if(texto.length == 0 || texto == null || texto == "" || texto == " "){
        return true;
    } else {
        return false;
    }
}

function caracteresEspeciales(texto) {
	var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

	if (format.test(texto)) {
		return true;
	} else {
		return false;
	}
}

function acentos(texto) {
	var format = /[áéíóú]+/;

	if (format.test(texto)) {
		return true;
	} else {
		return false;
	}
}

function mayusculas(texto) {
	if (/[A-Z]/.test(texto)) {
		return true;
    }
}