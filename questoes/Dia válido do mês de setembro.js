var dia = parseInt(prompt("dia: "));
var cond = true 
var l = []

while(cond){
if(1 <= dia && dia <= 30){
    l.push(1);
    l = l.join("")
    alert(l)
    cond = false;
}else{
   l.push(0)
   dia = parseInt(prompt("dia: "));
   continue
}}
