var vetor = [],vetor_n = [],msg1='',msg2=''
for(var e = 0;e<10;e++){
   var n = parseInt(prompt("num:"))
   vetor[e] = n
}
var o = parseInt(prompt("ordem:"))
var p = parseInt(prompt("primeiro:"))
var u = parseInt(prompt("ultimo:"))
var o_d = o
while(o!==0){
  o = parseInt(prompt("ordem:"))
  p = parseInt(prompt("primeiro:"))
  u = parseInt(prompt("ultimo:"))
  if(o!==0){
  o_d = o
  }
}
for(var e = (p-1), k=0, j=u; e < u;e++){
   vetor_n[k] = vetor[e]
   if(o_d==1){
     msg1+=vetor[e]+" "
   }else{
     msg2+=vetor[j]+" "
   }
   k++
   j--
}
if(o_d!==0){
if(o_d===1){
 alert(msg1)
}else{
 alert(msg2)
}
}
