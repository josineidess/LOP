var n1;
var n2;
var media;
var c1 = true
var c2 = true

var p1 = parseInt(prompt("nota1: "))

while(c1){
if(0 <= p1 && p1 <= 10 ){
    n1 = p1
    c = false
    break
}else{
    p1 = prompt("nota1: ")
    continue
}}

var p2 = parseInt("nota2:")

while(c2){
if(0 <= p2 && p2 <= 10 ){
    n2 = p2
    c2 = false
    break
}else{
    p2 = prompt("nota2: ")
    continue
}}

media = (parseInt(n1) + parseInt(n2)) / 2
alert(media)
