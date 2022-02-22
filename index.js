const nombre = document.querySelector('.nombre')
const apellido = document.querySelector('.apellido')
const telefono = document.querySelector('.telefono')
const boton = document.querySelector('.boton')
const tabla = document.querySelector('.tabla')

boton.onclick=()=>{
    const registro = {
        nombre: nombre.value,
        apellido: apellido.value,
        telefono: telefono.value
    }
    enviadatos(registro)
}

cargardatos(tabla)

