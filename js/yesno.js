document.getElementById("yesno-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const input = document.getElementById("yesno-input");
    const main = document.querySelector("main.hero");
    const respuestaDiv = document.getElementById("yesno-response");
    const botonAgain = document.getElementById('again');
    const form = document.getElementById('yesno-form');

    const questionDisplayH2 = document.getElementById('question-display'); 

    const pregunta = input.value.trim();

    if (pregunta === "") {
        main.style.background = "";
        botonAgain.style.display = "none";
        respuestaDiv.textContent = "Por favor escribí una pregunta.";

        questionDisplayH2.textContent = 'Hace una pregunta "si o no"'; 
        form.style.display = 'block'; 
        return;
    }

  
    questionDisplayH2.textContent = pregunta; 

    respuestaDiv.textContent = "Consultando...";
    main.style.background = ""; 
    form.style.display = "none";

    try {
        const res = await fetch("https://yesno.wtf/api");
        const data = await res.json();

        // Fondo main con gif
        main.style.backgroundImage = `url(${data.image})`;
        main.style.backgroundSize = "cover";
        main.style.backgroundPosition = "center";
        main.style.backgroundRepeat = "no-repeat";
        main.style.height= "90vh";

        respuestaDiv.style.color = "white";
        respuestaDiv.style.fontWeight = "bold";
        respuestaDiv.style.fontSize = "2rem";
        respuestaDiv.style.textShadow = "2px 2px 8px rgba(0,0,0,0.9)";
        
        botonAgain.style.display = "block"; 
        respuestaDiv.textContent = `Respuesta: ${data.answer.toUpperCase()}`;
    } catch (error) {
        main.style.background = "";
        respuestaDiv.textContent = "Error al consultar la API.";
        console.error(error);
        form.style.display = 'block'; 
        botonAgain.style.display = 'none';
        questionDisplayH2.textContent = 'Hace una pregunta "si o no"'; 
    }
});


function recargar(){
    const input = document.getElementById("yesno-input");
    const main = document.querySelector("main.hero");
    const respuestaDiv = document.getElementById("yesno-response");
    const botonAgain = document.getElementById('again');
    const form = document.getElementById('yesno-form');
    const questionDisplayH2 = document.getElementById('question-display'); 

   
    input.value = ''; 
    respuestaDiv.textContent = ''; 
    main.style.backgroundImage = ''; 
    main.style.background = ''; 
    main.style.height = ''; 


    questionDisplayH2.textContent = 'Hace una pregunta "si o no"';

   
    form.style.display = 'block';
    botonAgain.style.display = 'none';
}


document.addEventListener('DOMContentLoaded', () => {
    const botonAgain = document.getElementById('again');
    if (botonAgain) {
        botonAgain.addEventListener('click', recargar);
    }
});