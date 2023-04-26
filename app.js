// La siguiente aplicación nos ayudará a trabajar la lógica de la encriptación y desencriptación

let btnEncriptar = document.getElementById("btnEncriptar");
let btnDesencriptar = document.getElementById("btnDesencriptar");
let btnCopiar = document.getElementById("btnCopiar");
let texto = document.getElementById("areaTexto");
let lectura = document.getElementById("areaLectura");

texto.value = ""
lectura.value = ""
texto.focus()

const vocales = ["a", "e", "i", "o", "u"];
const encriptado = [/ai/g, /enter/g, /imes/g, /ober/g, /ufat/g]

function remplazarVocal(letra) {
    let vocalCambiada = "";
    for (let vocal = 0; vocal < vocales.length; vocal++) {
        if (vocales[vocal] == letra) {
            vocalCambiada = vocalCambiada + encriptado[vocal].source;
            break;
        }
    }
    return vocalCambiada;
}

function encriptar() {
    let textoOriginal = texto.value.toLowerCase();
    let textoEncriptado = "";

    for (let posicion = 0; posicion < textoOriginal.length; posicion++) {
        let letra = textoOriginal[posicion];
        if (vocales.includes(letra)) {
            textoEncriptado = textoEncriptado + remplazarVocal(letra);
        } else {
            textoEncriptado = textoEncriptado + letra;
        }
    }
    lectura.value = textoEncriptado;
}

function desencriptar() {
    let textoEncriptado = texto.value.toLowerCase();
    
    for (let i = 0; i < encriptado.length; i++) {
        textoEncriptado = textoEncriptado.replace(encriptado[i], vocales[i]);
    }

    lectura.value = textoEncriptado;    
}

function copiar() {
    let textoCopiado = document.querySelector("#areaLectura");    
    textoCopiado.select();
    document.execCommand("copy");    
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;