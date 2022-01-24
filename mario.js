function piso(nPiso, altura){
    // TO DO. Deben poner el número correcto
    // de espacios y de numerales de acuerdo
    // al nPiso y a la altura.
    return "<p>" + "#" + "</p>";
}
let nPisos;
do{
// Lo que se hace: recibir el número
// del usuario y guardarlo como número
nPisos = parseInt(prompt("Ingrese la altura de la torre. Número entre 1 y 10"))
}while(isNaN(nPisos) || nPisos < 1 || nPisos > 10);// La condición para que se repita
let  contenido = "";
for(let i = 1; i <= nPisos; i++){
    contenido = contenido + piso(i, nPisos)
}

let contenedor = document.querySelector("#contenedor");
contenedor.innerHTML = contenido;
 