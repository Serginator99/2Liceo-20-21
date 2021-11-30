let h1Resultado= document.querySelector("#Resultado")

let peso= Number (prompt("Escriba su peso en kilogramos"))
let estatura= Number (prompt("Escriba su estatura en metros"))
let IMC= (peso/ (estatura * estatura))

if(IMC < 18.5){
    Resultado.innerHTML= "Usted está bajo de peso"
}else{
    if(IMC< 25){
        Resultado.innerHTML= "Usted está normal de peso"
    }else{
        if(IMC< 30){
            Resultado.innerHTML= "Usted está en sobrepeso y en preobesidad"
        }else{
            if(IMC< 34.9){
                Resultado.innerHTML= "Usted está en obesidad clase I"
            }else{
                if(IMC< 39.9){
                    Resultado.innerHTML= "Usted está en obesidad clase II"
                }else{
                    Resultado.innerHTML= "Usted está en obesidad tipo III"
                }
            }
        }
    }
}