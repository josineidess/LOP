var a = prompt("a: ");
var b = prompt("b: ");
var c = prompt("c: ");

var delta = (b ** 2) - (4*a*c);
//f1 e f2 calculam x1 e x2
var f1 = (parseInt(-1*b) + parseInt(Math.sqrt(delta)))/2*a;
var f2 = (parseInt(-1*b) - parseInt(Math.sqrt(delta)))/2*a;
//f3 é quando só tem uma raiz
var f3 = (parseInt(-1*b)/(2*a));

if (delta > 0) {
   alert("X1: " + f1 + " e X2: " + f2);

} else if(delta == 0){
    alert("X: " + f3);
    
} else {
    alert("Nenhuma raiz");
}
