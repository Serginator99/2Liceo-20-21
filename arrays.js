nombres= ["Arambula", "Anita", "Daniela", "Yeidi", "Gaby", "Rubi", "Mariana", "Juanis", "Sofi", "Nori", "Viliglis", "Jorgito", "Mate", "Jacobo Alejandro", "Jose", "Dani C", "Pacho"]
edades=[]
for (let i=0; i< 17; i= i+1){
    do
    {
        (edad= Number(prompt(`Ingrese la edad de ${nombres[i]}`))
    }
    while(isNaN (edad) || edad<20 || edad>10);
    edades.push(edad)
}
for ( let i= 0; i<17; i++){
     suma= suma+edades[i];
}
promedio= suma/17
let contenido= document.querySelector("#informacion")
informacion.innerHTML= "el Promedio de las notas "+ promedio



