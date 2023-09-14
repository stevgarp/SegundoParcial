import {ModuleImg} from "../../modules/Agregator.js";

    // URL de la API de imágenes (reemplázala con tu API)
    const apiUri = 'https://api.thecatapi.com/v1/images/search?limit=10';

    // ID del contenedor de imágenes en el HTML
    const containerId = 'image-container';

    // Función para cargar imágenes al cargar la página
    ModuleImg.ModuleImg(apiUri, containerId);

    // Agregar un evento click al botón para recargar la página
    const reloadButton = document.getElementById('reload-button');
    reloadButton.addEventListener('click', () => {
      ModuleImg.ModuleImg(apiUri, containerId);
    });