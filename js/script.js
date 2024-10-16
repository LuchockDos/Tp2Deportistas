fetch('js/deportistas.json') 
  .then(response => response.json())
  .then(data => {
    const buscador = document.getElementById("buscador");
    const resultado = document.getElementById("resultado");
    const botonBuscar = document.getElementById("btn-buscar");

   
    mostrarDeportistas(data.deportistas);

    botonBuscar.addEventListener("click", () => {
      const consulta = buscador.value.toLowerCase();
      const filtrados = data.deportistas.filter(deportista => 
        deportista.nombre.toLowerCase().includes(consulta)
      );
      resultado.innerHTML = "";
      mostrarDeportistas(filtrados);
    });

    function mostrarDeportistas(deportistas) {
      if (deportistas.length > 0) {
        deportistas.forEach(deportista => {
          const tarjeta = document.createElement("div");
          tarjeta.classList.add("tarjeta");
          tarjeta.innerHTML = `
            <h2>${deportista.nombre}</h2>
            <p><strong>Deporte:</strong> ${deportista.deporte}</p>
            <p><strong>País:</strong> ${deportista.país}</p>
            <p><strong>Altura:</strong> ${deportista.altura} cm</p>
            <p><strong>Peso:</strong> ${deportista.peso} kg</p>
          `;
          resultado.appendChild(tarjeta);
        });
      } else {
        resultado.innerHTML = "<p>No se encontraron deportistas.</p>";
      }
    }
  })
  .catch(error => console.error('Error al cargar el JSON:', error));