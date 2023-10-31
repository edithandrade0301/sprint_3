console.log("Hoja de Vida Interactiva Cargada :D");

function pedirNuevaHabilidad() {
    const nuevaHabilidad = prompt("Por favor, introduce una nueva habilidad:");
    if (nuevaHabilidad !== null && nuevaHabilidad !== "") {
        mostrarMensajeAgradecimiento(nuevaHabilidad);
    }
}

// Función para mostrar un mensaje de agradecimiento
function mostrarMensajeAgradecimiento(habilidad) {
    const mensaje = `Gracias por la nueva habilidad: ${habilidad}. La tomaré en cuenta.`;
    alert(mensaje);
}

// Agregar un evento al botón "Añadir Habilidad"
document.getElementById('addSkill').addEventListener('click', pedirNuevaHabilidad);



document.getElementById('contactButton').addEventListener('click', function() {
    var userEmail = prompt("Por favor, introduce tu correo electrónico:");
    
    if (userEmail) {
        alert("Gracias " + userEmail + ", me pondré en contacto contigo pronto!");
    }
});

const calificarHojaDeVida = () => {
    let calificacion = prompt("Del 1 al 10, ¿cómo calificarías mi hoja de vida?");
    alert(`¡Gracias por calificar con un ${calificacion}!`);
}