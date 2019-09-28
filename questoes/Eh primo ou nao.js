//outra forma de fazer, sem usar for...
var a = parseInt(prompt("a:"))
var b = parseInt(prompt("n:"))
var maior = Math.max(a,b)
var menor = Math.min(a,b)
resto = maior - menor
if(menor > resto){
var result = 1
while(resto!=0){
   result = resto
   maior = menor
   menor = resto
   resto = maior - menor
}
}else{
    if(maior%menor!=0){
        result=1
    }else{
    result=menor}
}
alert("O MDC é: "+result)



var num = parseFloat(prompt("num: "))
var m = 'Eh primo'

if(num == 1 || num == 2){
    if(num == 1){
        m = 'Nao eh primo'
    }else{
        m = 'Eh primo'
    }
}else{
for(var e = 2; e < num;e++){
        if(num % e == 0){
            m = 'Nao eh primo'
            break
        }
}

}
alert(m)
