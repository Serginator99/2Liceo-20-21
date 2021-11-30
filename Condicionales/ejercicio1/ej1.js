let h1resultado= document.querySelector("#Resultado")

let numero= Number (prompt("Escriba un número entero"))

if(numero % 3 == 0 && numero % 5 == 0){
    Resultado.innerHTML= "FizzBuzz"
}else{
    if(numero % 3 == 0){
        Resultado.innerHTML= "Fizz"
    }else{
        if(numero % 5 == 0){
            Resultado.innerHTML= "Buzz"
        }
    } 
}
