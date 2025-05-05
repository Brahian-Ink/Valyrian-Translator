// script.js
function traducir() {
    const input = document.getElementById("inputText").value
      .toLowerCase()
      .replace(/[.,!?¿¡;:()\n\r]/g, "")
      .trim();
  
    const palabras = input.split(/\s+/);
    let contieneDesconocidas = false;
  
    const traducidas = palabras.map(p => {
      if (diccionario[p]) {
        return diccionario[p];
      } else {
        contieneDesconocidas = true;
        return `<span class=\"desconocida\">${p}</span>`;
      }
    });
  
    let resultado = traducidas.join(" ");
    if (contieneDesconocidas) {
      resultado += "<br><br><strong>Algunas palabras no existen en la lengua Valyrio.</strong>";
    }
  
    const salida = document.getElementById("outputText");
    salida.classList.remove("mostrar");
    salida.innerHTML = resultado;
    setTimeout(() => salida.classList.add("mostrar"), 10);
  }
  
  function detectarCambio() {
    const input = document.getElementById("inputText").value.trim();
    if (input === "") {
      const salida = document.getElementById("outputText");
      salida.classList.remove("mostrar");
      salida.innerHTML = "";
    }
  }
  
  function lanzarChispas(boton) {
    for (let i = 0; i < 10; i++) {
      const chispa = document.createElement("div");
      chispa.className = "spark";
      chispa.style.setProperty('--rand-x', Math.random());
      chispa.style.setProperty('--rand-y', Math.random());
      chispa.style.left = `${boton.offsetLeft + boton.offsetWidth / 2}px`;
      chispa.style.top = `${boton.offsetTop + boton.offsetHeight / 2}px`;
      document.body.appendChild(chispa);
      setTimeout(() => chispa.remove(), 600);
    }
  }