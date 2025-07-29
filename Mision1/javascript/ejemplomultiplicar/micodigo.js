function mostrarTabla() {
    const numero = document.getElementById("numero").value;
    const resultadoDiv = document.getElementById("resultado");
  
    if (numero === "") {
      resultadoDiv.innerHTML = "<p class='error'>Por favor ingresa un número.</p>";
      return;
    }
  
    let resultado = `<h2>Tabla del ${numero}</h2>`;
    for (let i = 1; i <= 10; i++) {
      resultado += `<p>${numero} x ${i} = ${numero * i}</p>`;
    }
  
    resultadoDiv.innerHTML = resultado;
  }
  