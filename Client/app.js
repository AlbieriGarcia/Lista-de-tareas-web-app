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

