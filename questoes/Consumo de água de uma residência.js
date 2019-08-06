var metroc = prompt("Metros cúbicos: ")
var consumo = 0
if(metroc <= 20){
    consumo = metroc * 8.5
}else{
    consumo = metroc * 11.5
}
alert(consumo+"R$")
