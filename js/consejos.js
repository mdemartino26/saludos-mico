async function getAdvice() {
  const adviceBox = document.getElementById('joke-box'); 
  adviceBox.textContent = 'Cargando consejo...';

  try {
    const res = await fetch('https://api.adviceslip.com/advice', {
      headers: {
        'Accept': 'application/json'
      }
    });
    const data = await res.json();

    if (data.slip && data.slip.advice) {
      adviceBox.textContent = data.slip.advice;
    } else {
      adviceBox.textContent = 'No se pudo obtener un consejo.';
    }
  } catch (error) {
    adviceBox.textContent = 'Error al cargar el consejo. Intentá de nuevo.';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  getAdvice(); 
  const adviceButton = document.getElementById('joke-button'); 
  adviceButton.addEventListener('click', getAdvice); 
});