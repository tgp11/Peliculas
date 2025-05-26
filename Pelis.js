
document.addEventListener("DOMContentLoaded", function () {
  fetch("Peliculas.json")
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error("Error al cargar el JSON");
      }
      return respuesta.json();
    })
    .then((datos) => {
      mostrarPeliculas(datos.peliculas);
    })
    .catch((error) => {
      console.error("Error al cargar las películas:", error);
    });
});

function mostrarPeliculas(peliculas) {
  const contenedor = document.getElementById("contenedor-peliculas");

  peliculas.forEach((pelicula) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("pelicula");

    tarjeta.innerHTML = `
      <h2>${pelicula.titulo}</h2>
      <img src="${pelicula.imagen}" alt="${pelicula.titulo}" />
      <p>${pelicula.descripcion}</p>
    `;

    contenedor.appendChild(tarjeta);
  });
}
