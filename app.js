function funcionEncriptar() {
    let texto = document.getElementById('input-texto-encriptar').value;
    let campoMensaje = document.getElementById('mensaje-encriptado');
    let divMensajeNoEncontrado = document.querySelector('.div-oculto');
    let btnCopiar = document.getElementById('btn-copiar-texto');

    let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if (texto === '') {
        divMensajeNoEncontrado.style.display = "block";
        btnCopiar.hidden = true;
        campoMensaje.textContent = '';
    } else {
        campoMensaje.textContent = textoCifrado;
        divMensajeNoEncontrado.style.display = "none";
        btnCopiar.hidden = false;
    }
}

function funcionDescriptar(){
    let texto = document.getElementById('input-texto-encriptar').value;
    let campoMensaje = document.getElementById('mensaje-encriptado');
    let divMensajeNoEncontrado = document.querySelector('.div-oculto');
    let btnCopiar = document.getElementById('btn-copiar-texto');

    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (texto === '') {
        divMensajeNoEncontrado.style.display = "block";
        btnCopiar.hidden = true;
        campoMensaje.textContent = '';
    } else {
        campoMensaje.textContent = textoCifrado;
        divMensajeNoEncontrado.style.display = "none";
        btnCopiar.hidden = false;
    }
}

function copiarAlPortapapeles() {
    let texto = document.getElementById('mensaje-encriptado').textContent;
    navigator.clipboard.writeText(texto)
        .then(() => {
           
        })
        .catch((err) => {
            console.error('Error al copiar al portapapeles: ', err);
        });
}
