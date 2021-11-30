let urlTeo = "https://www.eltiempo.com/files/image_640_428/uploads/2021/11/07/618893adeabeb.jpeg"
let urlSherman = "https://www.vanguardia.com/binrepository/716x1074/0c0/716d477/none/12204/FBMQ/depor002_3941370_20191225155841.jpg"
let imgHtml = document.querySelector("#jugadoresTacticos")

let nombre = prompt("Ingrese el nombre del jugador")
if (nombre == "Teo"){
    imgHtml.src = urlTeo
}
else{
    imgHtml.src = urlSherman
}