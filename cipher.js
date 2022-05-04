/*Cifra de César
 A B C D E F G H I J K  L  M
 0 1 2 3 4 5 6 7 8 9 10 11 12

 N  O  P  Q  R  S  T  U  V  W  X  Y  Z
 13 14 15 16 17 18 19 20 21 22 23 24 25

 (codigoDaLetra + 7) % 26             */

// PRECISA ARRUMAR OS BOTÕES DE SELECAO
var selecao = document.querySelector('#cifras');
var incrementoUm = document.querySelector('#incrementoUm');
incrementoUm.style.visibility = '';

selecao.addEventListener("onchange", function() {
  if (selecao.cifras.value) {
    incrementoUm.style.visibility = 'visible';
    incrementoUm.value = '';
  } else {
    incrementoUm.style.visibility = 'hidden';
  }
});

// Base64
//recebe a mensagem para codificar em BASE64
var btnCodificar = document.querySelector('#btnCodificarBase64');
var btnDecodificar = document.querySelector('#btnDecodificarBase64');
var result = document.querySelector('#resultado');

btnCodificar.addEventListener("click", function (e) {
  e.preventDefault()
  var recebeMensagemC = document.querySelector('#mensagem').value;
  var codificarStr = btoa(recebeMensagemC);
  result.innerHTML = codificarStr;
})
btnDecodificar.addEventListener("click", function (e) {
  e.preventDefault();
  var recebeMensagemD = document.querySelector('#mensagem').value;
  var decodificarStr = atob(recebeMensagemD);
  result.innerHTML = decodificarStr;
});

function reload() {
  location.reload();
}
