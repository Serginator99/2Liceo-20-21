urlsImg =["https://upload.wikimedia.org/wikipedia/commons/e/eb/Stephen_Hawking.StarChild.jpg","https://www.biografiasyvidas.com/monografia/newton/fotos/newton_420.jpg","https://www.biografiasyvidas.com/biografia/c/fotos/copernico_nicolas.jpg","https://i.blogs.es/f10a3e/einsteinap/450_1000.jpeg"]
nombres =["Hawking", "Newton", "Copernico", "Einstein"]
html= ""
for (let i = 0; i < 4; i++){
html= html + `<div class= "Cientifico"><img src= "${urlsImg[i]}"/> <p>${nombres[i]}</p></div>`
}
let contenedor = document.querySelector("#contenedor")
contenedor.innerHTML = html
