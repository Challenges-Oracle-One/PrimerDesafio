//Unir las variables Js con el HTML
var mensajeIngresado = document.querySelector('#mensaje')
var mensajeFinal = document.querySelector('#msg')
var botonEncriptar = document.querySelector('#btn-encriptar')
var botonDesencriptar = document.querySelector('#btn-desencriptar')
var botonCopiar = document.querySelector('#btn-copy')


//Funcion para encriptar, usando la funcion replace
function encriptar() {
  var mensaje = mensajeIngresado.value
  var mensajeEncriptado = mensaje

    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat')
  mensajeFinal.value = mensajeEncriptado
}

//Funcion para encriptar,
function desencriptar() {
  var mensaje = mensajeIngresado.value
  var mensajeDesencriptado = mensaje

    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u')
  mensajeFinal.value = mensajeDesencriptado
}

function copiarMensaje(){
  let texto = document.getElementById('msg');
  msg.select();
  msg.setSelectionRange(0,99999);
  document.execCommand('copy');
}

//onclick para cada boton, llamando a la funcion
botonEncriptar.onclick = encriptar
botonDesencriptar.onclick = desencriptar
