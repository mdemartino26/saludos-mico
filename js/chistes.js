async function getJoke() {
  const jokeBox = document.getElementById('joke-box');
  jokeBox.textContent = 'Cargando chiste...';

  try {
    const res = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    });
    const data = await res.json();

    if (data.joke) {
      jokeBox.textContent = data.joke;
    } else {
      jokeBox.textContent = 'No se pudo obtener un chiste.';
    }
  } catch (error) {
    jokeBox.textContent = 'Error al cargar el chiste. Intentá de nuevo.';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  getJoke();

  const jokeButton = document.getElementById('joke-button');
  jokeButton.addEventListener('click', getJoke);
});
