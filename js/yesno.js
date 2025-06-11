document.getElementById("yesno-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const input = document.getElementById("yesno-input");
  const main = document.querySelector("main.hero");
  const respuestaDiv = document.getElementById("yesno-response");
  const pregunta = input.value.trim();

  if (pregunta === "") {
    // Limpiar fondo main
    main.style.background = "";
    respuestaDiv.textContent = "Por favor escribí una pregunta.";
    return;
  }

  respuestaDiv.textContent = "Consultando...";
  main.style.background = ""; // limpio fondo

  try {
    const res = await fetch("https://yesno.wtf/api");
    const data = await res.json();

    // Fondo main con gif
    main.style.backgroundImage = `url(${data.image})`;
    main.style.backgroundSize = "cover";
    main.style.backgroundPosition = "center";
    main.style.backgroundRepeat = "no-repeat";

    // Opcional: para que el fondo cubra toda la altura visible
    main.style.height= "90vh";

    // Estilos para el texto de respuesta
    respuestaDiv.style.color = "white";
    respuestaDiv.style.fontWeight = "bold";
    respuestaDiv.style.fontSize = "2rem";
    respuestaDiv.style.textShadow = "2px 2px 8px rgba(0,0,0,0.9)";

    respuestaDiv.textContent = `Respuesta: ${data.answer.toUpperCase()}`;
  } catch (error) {
    main.style.background = "";
    respuestaDiv.textContent = "Error al consultar la API.";
    console.error(error);
  }
});
