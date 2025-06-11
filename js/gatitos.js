async function getCatImage() {
  const catBox = document.getElementById('cat-box');
  catBox.textContent = 'Cargando gatito...';

  try {
    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await res.json();

    if (data.length > 0 && data[0].url) {
      catBox.innerHTML = `<img src="${data[0].url}" alt="Un gato adorable" style="max-height:40vh; border-radius: 12px;" />`;
    } else {
      catBox.textContent = 'No se pudo obtener un gatito.';
    }
  } catch (error) {
    catBox.textContent = 'Error al cargar el gatito. Intentá de nuevo.';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  getCatImage();

  const catButton = document.querySelector('.cat-button');
  catButton.addEventListener('click', getCatImage);
});
