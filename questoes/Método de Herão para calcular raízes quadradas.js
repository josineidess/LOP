var n = parseFloat(prompt("numero: "))
alert(Math.sqrt(n)+"\n")
var a0 = 1
var a1 = 0
for(e = 0;e<5;e++){
    a1 = (a0 + n/a0)/2
    alert(a1+"\n")
    a0 = a1
}1
