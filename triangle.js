function piso(nPiso, altura){
    let nEspacios= altura- nPiso
    let nNumerales= nPiso
    texto = "<p>"
    for (i = 0; i< nEspacios; i++){
        texto = texto + "&nbsp;";
    }
    for (i = 0; i< nNumerales; i++){
        texto= texto + "#";
    }
    if(nPiso == 1){
        texto= texto + "#";
        texto= texto + "</p>"
        return texto
    }if(1< nPiso && nPiso< 10){
        texto= texto + "#" + "&nbsp;"+ "#";
        texto= texto + "</p>"
        return texto
    }if (nPiso == 10){
        texto= texto + "#";
    }

    texto= texto + "&nbsp";
    for (i = 0; i< nNumerales; i++){
        texto= texto + "#";
    }
    texto= texto + "</p>"                        
    return texto;
}
let nPisos;
do{
nPisos = parseInt (prompt("Ingrese la altura de la torre. Número entre 1 y 10"))
}while(isNaN(nPisos) || nPisos < 1 || nPisos >= 10);// La condición para que se repita
let  contenido = "";
for(let i = 1; i <= nPisos; i++){
    contenido = contenido + piso(i, nPisos)
}

let contenedor = document.querySelector("#contenedor");
contenedor.innerHTML = contenido;