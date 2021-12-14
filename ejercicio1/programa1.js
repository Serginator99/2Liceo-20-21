let urlTriste = "https://pbs.twimg.com/profile_images/1374804905010020352/XDbgf_2y_400x400.jpg"
let urlFeliz = "https://toppng.com/uploads/preview/free-carita-feliz-para-colorear-de-emoji-para-desenhar-11562899600zjsv820t7p.png"
let imgHtml = document.querySelector("#imagenCarita")
let numero1
do{
    numero1= Number (prompt("Primer número"))
}while (isNaN(numero1)|| 10<numero1||numero1<0);

let numero2
do{
    numero2= Number(prompt("Segundo número"))
}while (isNaN(numero2)|| 10<numero2||numero2<0)

let numero3
do{
    numero3= Number(prompt("Tercer número"))
}while (isNaN(numero3)|| 10<numero3||numero3<0)

let operacion1= (numero1+numero2+numero3)
let promedio=  (operacion1)/3
if (promedio >= 6){
    imgHtml.src = urlFeliz
}
else{
    imgHtml.src = urlTriste
}

 