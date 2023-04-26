const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function copiarTexto() {
    var textoACopiar = document.getElementById("mensajito").value;
    navigator.clipboard.writeText(textoACopiar).then(function() {
      console.log("Texto copiado al portapapeles");
    }, function() {
      console.error("Error al copiar el texto al portapapeles");
    });
  }
function btnEncriptar(){
    const textoEncriotado = encriptar(textArea.value)
    mensaje.value = textoEncriotado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}
function encriptar(stringEncriptado){
    let matrizcode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizcode.length; i++){
        if(stringEncriptado.includes(matrizcode[i][0]))
        stringEncriptado = stringEncriptado.replaceAll(matrizcode[i][0],matrizcode[i][1])
    }
    return stringEncriptado
}
function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
   // mensaje.style.backgroundImage = "none"
}
function desencriptar(stringDesencriptado){
    let matrizcode = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizcode.length; i++){
        if(stringDesencriptado.includes(matrizcode[i][0]))
        stringDesencriptado = stringDesencriptado.replaceAll(matrizcode[i][0],matrizcode[i][1])
    }
    return stringDesencriptado
}
textArea.addEventListener("keypress", function(e) {
  const charCode = e.charCode;
  if (charCode >= 97 && charCode <= 122) {
  } else {
    e.preventDefault();
  }
});