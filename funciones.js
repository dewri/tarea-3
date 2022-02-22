function cargardatos(tabla){
fetch("http://www.raydelto.org/agenda.php").then(function(contactos){
    return contactos.json();
}).then(res => {
    var carga =res
    //console.log(carga)
    for(i in carga){
        i++;
        //console.log(carga);
        var registro = carga[i]
        muestradatos(registro,tabla)
        //console.log(registro);
        
    }
});
}

function enviadatos(datos){
    console.log(datos);

    fetch("http://www.raydelto.org/agenda.php",{
        method: 'POST',
        //headers: {"Content-Type": "application/json"},
        body: JSON.stringify(datos)
        
    }).then(res => res.json())
    .then(data =>{
        console.log(data);
    }).catch(err =>console.error(err));
    
}
function muestradatos(registro,tabla){

    console.log(registro)
    
    console.log(registro["nombre"]);
    
    let divdatos = document.createElement('div')
    let nombre = document.createElement('p')
    let apellido = document.createElement('p')
    let telefono = document.createElement('p')

    nombre.innerHTML = registro["nombre"]
    apellido.innerHTML = registro["apellido"]
    telefono.innerHTML = registro["telefono"]

    divdatos.classList.add('datos')

    divdatos.appendChild(nombre)
    divdatos.appendChild(apellido)
    divdatos.appendChild(telefono)

    tabla.appendChild(divdatos)

}