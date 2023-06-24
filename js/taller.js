let coleccion=document.getElementsByTagName("li");


function seleccionar(){

    let nombreElement=document.getElementById("nombre");
    nombre=nombreElement.value;
    for(let i=0;i<coleccion.length-1;i++){
        let nombreAux=coleccion[i].innerText;
        if(nombreAux==nombre){
            let seleccionado=document.createElement("li");
            document.getElementById("seleccionados").appendChild(seleccionado);
            seleccionado.innerHTML=nombreAux;
            document.getElementById("disponibles").removeChild(coleccion[i]);
            seleccionado.onclick=devolver;
            
        }
        
    }
    

    console.log(coleccion)

}

function devolver(){
    document.getElementById("disponibles").appendChild(this);
    coleccion.appendChild(this)
}



