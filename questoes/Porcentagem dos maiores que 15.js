var numeros = 0
var imp_m = 0
var num = parseInt(prompt("num: "))

while(num != 0){
   numeros += 1
   if(num % 2 == 1 && num > 15){
       imp_m += 1
   }
   num = parseInt(prompt("num: "))
   if(num === 0){
       var p = (imp_m * 100) / (numeros)
       alert(p+"%")
       break
   }
}
