var valor = prompt("valor: ")
var rend = 0
if(valor <= 1000.00){
    rend = valor * 0.04
}else if(1000.00 < valor < 5000.00){
    rend = valor * 0.045
} else if(valor > 5000.00){
    rend = valor * 0.05
}
alert("Rendimento: "+rend)
