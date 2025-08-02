// Cargar los datos desde el archivo JSON
fetch('datos.json')
    .then(response => response.json())
    .then(datos => {
      // Crear el gráfico con los datos iniciales
        const ctx = document.getElementById('energiaChart').getContext('2d');
        const energiaChart = new Chart(ctx, {
            type: 'bubble',
            data: datos,
            options: {
                responsive: true,
                plugins: {
                  title: {
                    display: true,
                  }
                }
            }
        });
        // Función para mostrar/actualizar los datos del gráfico según el tipo seleccionado
        window.mostrarTipo = function (tipo) {
            const tipoFiltrado = tipo.toLowerCase();

            // Filtrar los datasets que coincidan con el tipo seleccionado
            const datosFiltrados = {
                labels: datos.labels, // Mantenemos las mismas etiquetas
                datasets: datos.datasets.filter(dataset => dataset.label.toLowerCase() === tipoFiltrado)
            };

            // Si no hay datos para el tipo seleccionado, mostrar un mensaje de error
            if (datosFiltrados.datasets.length === 0) {
                console.warn(`No hay datos disponibles para el tipo: ${tipo}`);
                return;
            }

            // Actualizar los datos del gráfico
            energiaChart.data = datosFiltrados;
            energiaChart.update();

            // Mostrar la imagen correspondiente y ocultar las demás
            const imagenes = document.querySelectorAll('.imagen-tipo');
            imagenes.forEach(imagen => imagen.style.display = 'none');

            const imagenSeleccionada = document.getElementById(`imagen-${tipoFiltrado}`);
            if (imagenSeleccionada) {
                imagenSeleccionada.style.display = 'block';
            } else {
                console.warn(`No se encontró la imagen para el tipo: ${tipo}`);
            }
        };
    })
    .catch(error => console.error('Error cargando los datos:', error));