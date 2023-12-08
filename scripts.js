document.addEventListener("DOMContentLoaded", function () {
    // Datos de ejemplo para las tarjetas
    const datosTarjetas = [
        {
            usuario: "Keilis",
            imagen: "keilis.jpg",
            contenido: "Hola, me gusta el cafe por las mañanas.",
        },
        {
            usuario: "Elon musk",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1tSET4nWGHChKETYNasyJMjDl3piqM0gLrpepD5EIAQ&s.jpg",
            contenido: "Hoy me desperte con ganas de ir a marte!",
        },
        // Agrega más tarjetas según sea necesario
    ];

    const contenedorTarjetas = document.getElementById("tarjetas-container");

    // Función para crear y agregar tarjetas al contenedor
    function crearTarjetas() {
        datosTarjetas.forEach((datos) => {
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("tarjeta");

            tarjeta.innerHTML = `
                <div class="cabecera-tarjeta">
                    <img src="${datos.imagen}" alt="${datos.usuario}">
                    <h2>${datos.usuario}</h2>
                </div>
                <div class="contenido-tarjeta">
                    <p>${datos.contenido}</p>
                </div>
                <div class="pie-tarjeta">
                    <button>Me gusta</button>
                    <button>Comentar</button>
                </div>
            `;

            contenedorTarjetas.appendChild(tarjeta);
        });
    }

    // Llama a la función para crear las tarjetas al cargar la página
    crearTarjetas();
});
