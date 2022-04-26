let N= Number(prompt("Ingrese el número deseado de discos"))
let origen= Number(prompt("Ingrese la plataforma incial(1,2 o 3)"))
let destino= Number(prompt("Indique la plataforma a la que quiere desplazar la torre"))
let platformaIntermedia= 0 
function hanoi (N,origen,destino)
{
    if(N==1){
        return(`${origen}--> ${destino}`)
    }else


    if(origen== 1 && destino== 3)
    platformaIntermedia=2

    if(origen== 2 && destino== 3)
    platformaIntermedia=1

    if(origen== 1 && destino== 2)
    platformaIntermedia=3

    if(origen== 2 && destino== 1)
    platformaIntermedia=3

    if(origen== 3 && destino== 1)
    platformaIntermedia=2

    if(origen== 3 && destino== 2)
    platformaIntermedia=1

    return hanoi(N-1,origen,destino)
}



let contenedor = document.querySelector("#resultado")
resultado.innerHTML= hanoi(N,origen,destino)
