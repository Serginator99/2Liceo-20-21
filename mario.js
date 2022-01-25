function piso(nPiso, altura){
    texto = "<p>"
    for (i = 0; i<= altura-nPiso; i++){
        texto = texto + "&nbsp"
    }
    espacio
    for (i = 0; i<= nPiso- ; i++){
        espacio= texto + espacio
    }                           
    return texto
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