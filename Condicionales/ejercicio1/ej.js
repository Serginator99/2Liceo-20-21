let h1resultado= document.querySelector("#resultado")

let altura= Number (prompt("A que altura desa que llegue el proyectíl"))
let velocidad= Number (prompt("Velocidad inicia del momento que lo lanza"))

if(altura <= velocidad){
    resultado.innerHTML= "Llega a la altura deseada"
}else{
    if(altura> velocidad){
        resultado.innerHTML= "No llega a la altura deseada"
    }
}