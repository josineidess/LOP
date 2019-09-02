var a = parseInt(prompt("gramas: "))
segundos = 0
if(a > 1){
while(a >= 0.5){
   a = a * 0.5
   segundos+=50
}
s = segundos % 60
m = (segundos - s)/60
}else{
s = 50
m = 0
}

alert(m+" minutos e "+s+" segundos")
