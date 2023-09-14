export async function ModuleImg (apiUri, containerId) {
    try {
      const response = await fetch(apiUri);
      const data = await response.json();
  
      const container = document.getElementById(containerId);
  
      // Limpiar el contenedor antes de agregar nuevas imágenes
      container.innerHTML = '';
  
      data.forEach(imageUrl => {
        const img = document.createElement('img');
        img.src = imageUrl.url;
        img.className = imageUrl.id;
        
        container.appendChild(img);
      });
    } catch (error) {
      console.error('Error al cargar imágenes:', error);
    }
  }

  