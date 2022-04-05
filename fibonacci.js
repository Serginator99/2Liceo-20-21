Fb = prompt("Ingrese un número entre 0 y 40")

do{
    Fb = prompt("Ingrese un número entre 0 y 40")
}while(isNaN(Fb) || )

function fb(n){
    if(n==1 || n==0)
    return 1
    else
    return fb(n-1)+ fb(n-2)
}
