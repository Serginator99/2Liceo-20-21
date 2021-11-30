let h1resultado= document.querySelector("#resultado")

let altura= Number (prompt("A que altura desa que llegue el proyectíl"))
let velocidad= Number (prompt("Velocidad inicia del momento que lo lanza"))
let t= (0-velocidad)/(0- 9.8)
let desplazamiento= (velocidad*t)-((9.8*t*t)/2)

if(altura <= desplazamiento){
    resultado.innerHTML= "Llega a la altura deseada"
}else{
    if(altura> desplazamiento){
        resultado.innerHTML= "No llega a la altura deseada"
    }
}