//constantes
const txtArea = document.querySelector(".text_area");
const mensaje = document.querySelector(".mensaje_encriptado");
const alerta1 = document.querySelector(".texto");

function btnEncriptar() {
    const textoEncriptado = encriptar(txtArea.value);
    mensaje.value = textoEncriptado;
    txtArea.value = "";
    mensaje.style.backgroundImage = "none";
    alerta1.style.display = "none";
    
}
function encriptar(textoEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoEncriptada = textoEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(textoEncriptada.includes(matrizCodigo[i][0])){
            textoEncriptada = textoEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return textoEncriptada;
}
function btnDesencriptar(){
    const textoEncriptado = desencriptar(txtArea.value)
    mensaje.value = textoEncriptado;
    textArea.value ="";
    mensaje.style.backgroundImage = "none";
    alerta1.style.display = "none";

}

function desencriptar(textodesEncriptar) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (textodesEncriptar.includes(matrizCodigo[i][1])) {
            textodesEncriptar = textodesEncriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }    
       
    }
    return textodesEncriptar;
    
}

function btnCopiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")

}
