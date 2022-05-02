//Cifra de César
var selecao1 = document.querySelector ('#cifraDeCesar');
var incrementoUm = document.querySelector ('#incrementoUm');
incrementoUm.style.visibility = 'hidden';

selecao1.addEventListener('change', () => {
  if (selecao1.checked) {
    incrementoUm.style.visibility = 'visible';
    incrementoUm.value = '';
  } else {
    incrementoUm.style.visibility = 'hidden';
  }
});

var codificar = document.querySelector ('#codificar');
var botao1 = document.querySelector ('#btnCodificar');
botao1.style.visibility = 'hidden';

codificar.addEventListener('change', () => {
  if (codificar.checked) {
    botao1.style.visibility = 'visible';
    botao1.value = '';
  } else {
    botao1.style.visibility = 'hidden';
  }
});

var decodificar = document.querySelector ('#decodificar');
var botao2 = document.querySelector ('#btnDecodificar');
botao2.style.visibility = 'hidden';

decodificar.addEventListener('change', () => {
  if (decodificar.checked) {
    botao2.style.visibility = 'visible';
    botao2.value = '';
  } else {
    botao2.style.visibility = 'hidden';
  }
});


// Base64
var selecao2 = document.querySelector ('#base64');
var incrementoDois = document.querySelector ('#incrementoDois');
incrementoDois.style.visibility = 'hidden';

selecao2.addEventListener('change', () => {
  if (selecao2.checked) {
    incrementoDois.style.visibility = 'visible';
    incrementoDois.value = '';
  } else {
    incrementoDois.style.visibility = 'hidden';
  }
});

var codificarBase64 = document.querySelector ('#codificarBase64');
var btnCodificarBase64 = document.querySelector ('#btnCodificarBase64');
btnCodificarBase64.style.visibility = 'hidden';

codificarBase64.addEventListener('change', () => {
  if (codificarBase64.checked) {
    btnCodificarBase64.style.visibility = 'visible';
    btnCodificarBase64.value = '';
  } else {
    btnCodificarBase64.style.visibility = 'hidden';
  }
});

var decodificarBase64 = document.querySelector ('#decodificarBase64');
var btnDecodificarBase64 = document.querySelector ('#btnDecodificarBase64');
btnDecodificarBase64.style.visibility = 'hidden';

decodificarBase64.addEventListener('change', () => {
  if (decodificarBase64.checked) {
    btnDecodificarBase64.style.visibility = 'visible';
    btnDecodificarBase64.value = '';
  } else {
    btnDecodificarBase64.style.visibility = 'hidden';
  }
});