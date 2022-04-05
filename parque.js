Pais = prompt("Ingrese si es de US o de COL")

do{
    Pais =prompt("Ingrese si es de US o de COL")
}while(Pais!= "COL" && Pais!= "US");
if (Pais== "COL"){
    do {
        temperatura= Number(prompt("Ingrese su temperatura en Grados"))
    } while (isNaN(temperatura) || (temperatura>50) || (temperatura<=0));
    do {
        estatura= Number(prompt("Ingrese su estatura en centímetros"))
    } while (isNaN(estatura));
    do {
        Acompañante= prompt("¿Va con un acompañante adulto?")
    } while (Acompañante!= "Si" && Acompañante!= "No")
    if(estatura<140 && Acompañante== "No" )
    console.log= "No puede entrar"

}else{
    do {
        temperatura= Number(prompt("Ingrese su temperatura en Farenheit"))
    } while (isNaN(temperatura) || (temperatura>50) || (temperatura<=0));
    do {
        estatura= Number(prompt("Ingrese su estatura en pies"))
    } while (isNaN(estatura));
    do {
        Acompañante= prompt("¿Va con un acompañante adulto?")
    } while (Acompañante!= "Si" && Acompañante!= "No");
    if(estatura<4.5 && Acompañante)
}
