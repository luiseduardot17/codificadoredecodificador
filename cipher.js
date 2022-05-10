// BOTÕES DE SELECAO: aparecer deslocamento
var selecao = document.querySelector('#cifras');
var incremento = document.querySelector('#incremento');
incremento.style.visibility = 'hidden';

selecao.addEventListener('click', function (e) {
  if (selecao.value == "1") {
    incremento.style.visibility = 'visible';
    incremento.value = '';
  } else {
    incremento.style.visibility = 'hidden';
  }
});

// SELECIONAR OS RADIO BUTTONS CRIA UM BOTAO
var radiais = document.querySelector('#radiais');
var encode = document.querySelector('#codificar');
var decode = document.querySelector('#decodificar');

radiais.addEventListener('click', function (event) {
  if (encode.checked) {
    btnGo.innerHTML = `<input class="btn" id="btnCodificar" type="button" value="Codificar mensagem!">`
    document.querySelector('#btnCodificar').addEventListener('click', codificar);
  } else if (decode.checked) {
    btnGo.innerHTML = `<input class="btn" id="btnDecodificar" type="button" value="Decodificar mensagem!">`
    document.querySelector('#btnDecodificar').addEventListener('click', decodificar);
  }
})

//CODIFICAR BASE64 E CIFRA DE CESAR
var result = document.querySelector('#resultado')

function codificar() {
  var entradaTxT = document.querySelector('#mensagem').value
  if (selecao.value == '1' && encode.checked) {
    codificaCesar()
  } else if (selecao.value == '2' && encode.checked) {
    var codificarStr = entradaTxT
    result.value = btoa(codificarStr);
  }
};

//DECODIFICAR BASE64 E CIFRA DE CESAR
function decodificar() {
  var entradaTxT = document.querySelector('#mensagem').value
  if (selecao.value == '1' && decode.checked) {
    decodificaCesar()
  } else if (selecao.value == '2' && decode.checked) {
    var decodificarStr = atob(entradaTxT);
    result.innerHTML = decodificarStr;
  }
};

function codificaCesar() {
  var entradaTxT = document.querySelector('#mensagem').value
  var deslocamento = document.querySelector('#deslocamento').value
  var msgValue = ""
  // CODIFICAR EM CIFRA DE CESAR /PARA LETRAS MAIUSCULAS E MINUSCULAS
  for (var i = 0; i < entradaTxT.length; i++) {
    var passos = parseInt(deslocamento)
    var asciiNumber = entradaTxT[i].charCodeAt()
    if (asciiNumber >= 65 && asciiNumber <= 90) {
      var passoTotal = asciiNumber + passos
      if (passoTotal > 90) {
        passoTotal = passoTotal - 26
      }
      msgValue += String.fromCharCode(passoTotal)
    } else if (asciiNumber >= 97 && asciiNumber <= 122) {
      var passoTotal = asciiNumber + passos
      if (passoTotal > 122) {
        passoTotal = passoTotal - 26
      }
      msgValue += String.fromCharCode(passoTotal)
    } else {
      msgValue += entradaTxT[i]
    }
  }
  result.value = msgValue
}
function decodificaCesar() {
  var entradaTxT = document.querySelector('#mensagem').value
  var deslocamento = document.querySelector('#deslocamento').value
  var msgValue = ""
  // DECODIFICAR EM CIFRA DE CESAR /PARA LETRAS MAIUSCULAS E MINUSCULAS
  for (var i = 0; i < entradaTxT.length; i++) {
    var passos = parseInt(deslocamento)
    var asciiNumber = entradaTxT[i].charCodeAt()
    if (asciiNumber >= 65 && asciiNumber <= 90) {
      var passoTotal = asciiNumber - passos
      if (passoTotal < 65) {
        passoTotal = passoTotal + 26
      }
      msgValue += String.fromCharCode(passoTotal)
    } else if (asciiNumber >= 97 && asciiNumber <= 122) {
      var passoTotal = asciiNumber - passos
      if (passoTotal < 97) {
        passoTotal = passoTotal + 26
      }
      msgValue += String.fromCharCode(passoTotal)
    } else {
      msgValue += entradaTxT[i]
    }
  }
  result.value = msgValue
}

//BOTÃO DE RESET
function reload() {
  location.reload();
};
//VIEWPORT
var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
Window.addEventListener('resize', () => {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
})

/*Cifra de César
 A B C D E F G H I J K  L  M
 0 1 2 3 4 5 6 7 8 9 10 11 12

 N  O  P  Q  R  S  T  U  V  W  X  Y  Z
 13 14 15 16 17 18 19 20 21 22 23 24 25

 ASCII maiusculas: 65 a 90; minusculas: 97 a 122

(codigoDaLetra + numdeslocamento) % 26 */
