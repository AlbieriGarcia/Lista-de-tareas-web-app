const contenedor = document.querySelector('#contenedor')
const fecha = document.querySelector('#fecha');
const lista = document.querySelector('#lista');
const input = document.querySelector('#input');
const btnForm = document.querySelector('#abrir-form');
const btnCerrarForm = document.querySelector('#cerrar-modal')

//Agregar tarea

btnForm.addEventListener("click",()=>{
    modal.showModal();
})

btnCerrarForm.addEventListener("click",()=>{
    modal.close()
})

//Obtener tareas
document.addEventListener('DOMContentLoaded', function() {
    // Llamada a la función para cargar los datos del JSON
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
       //hola
}