var num = parseInt(prompt("num: "))
var x1,x2,x3
x1 = 1
x2 = 1
x3 = x1 + x2
var msg = x1+" "+x2+" "
if(num != 1){
while(num > x3){
  msg += x3+" "
  x1 = x2
  x2 = x3
  x3 = x1 + x2
}
alert(msg)
}
