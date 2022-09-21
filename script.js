const inputTexto = document.querySelector(".textoencriptar");
const mensaje = document.querySelector(".areaEncriptada");
const panelDcho = document.querySelector(".divpanelResultado");
const panelDchoRes = document.querySelector(".divResultado");

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"], ["u", "ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
         stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }     
    }
    return stringEncriptado;

}



function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"], ["u", "ufat"]]
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }     
    }
    return stringDesencriptado;

}

function btnEncriptar(){
    const mensajeEncriptado = encriptar(inputTexto.value);
    mensaje.value = mensajeEncriptado;
    panelDcho.style.display = "none";
    panelDchoRes.style.display = "block";
    inputTexto.value = "";
}

function btnDesencriptar(){
    const mensajeEncriptado = desencriptar(inputTexto.value);
    mensaje.value = mensajeEncriptado;
    panelDcho.style.display = "none";
    panelDchoRes.style.display = "block";
    inputTexto.value = "";
}


function copiarTexto(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto Copiado", 'success');

}