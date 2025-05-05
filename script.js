// script.js
function traducir() {
    const inputElement = document.getElementById("inputText");
    const outputElement = document.getElementById("outputText");
    const input = inputElement.value
      .toLowerCase()
      .replace(/[.,!?¿¡;:()\n\r]/g, "")
      .trim();
  
    // Si el textarea está vacío, borramos la salida también
    if (input === "") {
      outputElement.innerHTML = "";
      return;
    }
  
    const palabras = input.split(/\s+/);
    let contieneDesconocidas = false;
  
    const traducidas = palabras.map(p => {
      if (diccionario[p]) {
        return diccionario[p];
      } else {
        contieneDesconocidas = true;
        return `<span class="desconocida">${p}</span>`;
      }
    });
  
    let resultado = traducidas.join(" ");
    if (contieneDesconocidas) {
      resultado += "<br><br><strong>⚠️ Algunas palabras no existen en la lengua Valyrio.</strong>";
    }
  
    outputElement.innerHTML = resultado;
  }
  