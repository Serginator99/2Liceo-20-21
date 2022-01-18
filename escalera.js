function piso(nPisos, altura){
    return"<p>" + "####" + "</p>"
}
let nPisos;
do{
    nPisos= parseInt(prompt("ingrese el numero de escalones para su escalera"))
//lo que se hace
}while(nPisos <=0 || nPisos >=10 || isNaN(nPisos));//la condición pára que se repita
let contenido = ""
for (let i = 1; i <= nPisos; i++){
    contenido = contenido + piso(i, nPisos)
}
let contenedor = document.querySelector("#contenedor")
contenedor.innerHTML = contenido;
