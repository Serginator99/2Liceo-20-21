J = prompt("Ingrese un número entre 0 y 40")
do{
    J = Number(prompt("Ingrese un número entre 0 y 40"))
}while(isNaN(J) || (J>41) || (J<0))

function fb(n){
        if(n==1 || n==0){
    return 1
    }
    else{
    return fb(n-1)+ fb(n-2)
    }
}
contenedor= document.querySelector ("#resultado")
contenedor.innerHTML ="El numero de Fibonacci de "+J+" es" + fb(J)