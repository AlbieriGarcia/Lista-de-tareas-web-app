const contenedor = document.querySelector('#contenedor')
const fecha = document.querySelector('#fecha');
const lista = document.querySelector('#lista');
const input = document.querySelector('#input');
const btnAbrirForm = document.querySelector('#abrir-form');
const btnCerrarForm = document.querySelector('#cerrar-modal');
const btnEnviarDatos = document.querySelector('#enviar-datos');
const datos_form = document.querySelector('form')

//Abrir formulario

btnAbrirForm.addEventListener("click",()=>{
    modal.showModal();
})

btnCerrarForm.addEventListener("click",()=>{
    modal.close()
})

// obtener datos del formulario
datos_form.addEventListener('submit', e =>{
    const data = Object.fromEntries(
        new FormData(e.target)
    )
    enviarDatos(data);
})

//Obtener tareas
document.addEventListener('DOMContentLoaded', function() {
    // Llama a la función para cargar los datos de la API
    cargarDatos();
});

async function cargarDatos() {

    const response = await fetch('https://localhost:7058/api/Tareas');

    const datos = await response.json();

    console.log(datos)
        
    const datosDiv = document.getElementById('lista');
    datosDiv.innerHTML = ''; 

    datos.forEach(dato => {
        // Crear un nuevo div para cada dato
        const datoDiv = document.createElement('div');
        datoDiv.innerHTML = `
            <li>
                <i class="far fa-circle co" data="Completado" id="0"></i>
                <p class="text">${dato.title}</p>
                <i class="fas fa-trash de" data="eliminado" id="0"></i>
            </li>
        `;
        // Agregar el nuevo div al contenedor de la lista
        datosDiv.appendChild(datoDiv);
    });
    
}


function enviarDatos(data) {
    fetch("https://localhost:7058/api/Tareas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

    location.reload();
}