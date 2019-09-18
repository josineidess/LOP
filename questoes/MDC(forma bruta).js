var num1,num2,maior,menor
num1 = parseInt(prompt("numero1: "))
num2 = parseInt(prompt("numero2: "))
maior = Math.max(num1,num2)
menor = Math.min(num1,num2)
resto = maior % menor
while(resto != 0){
    resto = maior % menor
    maior = menor
    menor = resto
    if(resto == 1){
        menor = 1
        break
    }
}

alert("O MDC é: "+menor)
