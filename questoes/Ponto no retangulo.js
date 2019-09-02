var xie = parseFloat(prompt("xei: "))
var yie = parseFloat(prompt("yei: "))
var xsd = parseFloat(prompt("xsd: "))
var ysd = parseFloat(prompt("ysd: "))
var x = parseFloat(prompt("x:"))
var y = parseFloat(prompt("y:"))
if((xie == xsd || yie == ysd)){
alert("Retangulo invalido")
}else{
if((x > xie && x < xsd) && (y < ysd && y > yie)){
  alert("Dentro")
}else {
  var bordax = ((x >= xie || x <= xsd) && (y == ysd || y == yie))
  var borday = ((y <= ysd || y >= yie) && (x == xie || x == xsd))
  if(bordax || borday){
     alert("Na borda")
  }else{
   alert("Fora")
  }
}}
