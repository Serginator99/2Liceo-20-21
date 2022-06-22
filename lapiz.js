let canv= document.querySelector ("#myCanvas")
let ctx= canv.getContext("2d")

ctx.fillStyle= "#a14c57";
ctx.strokeStyle= "black";
ctx.beginPath()
ctx.arc(225, 410, 25, 0, 1*Math.PI)
ctx.fill()
ctx.stroke()

ctx.fillStyle= "gray";
ctx.strokeStyle= "black";
ctx.beginPath()
ctx.rect(200, 400, 50, 10)
ctx.fill()
ctx.stroke()

ctx.fillStyle= "Yellow";
ctx.strokeStyle= "Black";
ctx.beginPath()
ctx.rect(200, 300, 50, 100)
ctx.fill()
ctx.stroke()


ctx.fillStyle= "#FFA08B";
ctx.strokeStyle= "black";
ctx.beginPath()
ctx.moveTo (200, 300)
ctx.lineTo (225, 250)
ctx.lineTo (250, 300)
ctx.lineTo (200, 300)
ctx.fill ()
ctx.stroke ()

ctx.fillStyle= "red";
ctx.strokeStyle= "black";
ctx.beginPath()
ctx.moveTo (210, 280)
ctx.lineTo (225, 250)
ctx.lineTo (240, 280)
ctx.lineTo (210, 280)
ctx.fill ()
ctx.stroke ()


