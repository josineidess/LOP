var n1, n2;
 
n1 = parseInt(prompt("num1: "))
n2 = parseInt(prompt("num2: "))
n2 = Math.min(n1,n2)
div = n1 % n2

divs = []
if(div == 0){
    alert(n1)
}
else{
while(div > 0){
    div = n2 % div
    divs.push(div)
    
}
alert(divs[divs.length-2])
}
