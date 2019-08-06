var peso = parseFloat(prompt("peso: "))
var altura = parseFloat(prompt("altura: "))
var imc = peso / (altura * altura)

if(imc < 18.5){
    alert("Abaixo do peso")
}else if(25 > imc && imc >= 18.5 ){
    alert("Peso normal")
}else if(30 > imc && imc >= 25){
    alert("Sobrepeso")
}else if(imc >= 30){
    alert("Obesidade")
}
