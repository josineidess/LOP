var raio = prompt("raio: ")
var p = 2 * raio * Math.PI
p = Math.round(p*100)/100
var a = (raio ** 2) * Math.PI
a = Math.round(a*100)/100
var v = (4/3) * (raio**3) * Math.PI
v = Math.round(v*100)/100
alert("\nPerimetro: "+p+"\nArea: "+a+"\nVolume: "+v)
