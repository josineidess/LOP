var ano = prompt("ano: ")
//condição que checa se é multíplo de 4
cond1 = (ano % 4 == 0)
//condição que checa se não é multíplo de 100
cond2 = (ano % 100 != 0)
//condição que checa se é multíplo de 400
cond3 = (ano % 400 == 0)
//&& representa and, que só é verdadeiro se as duas proposições forem
//|| representa or, que basta uma proposição ser verdadeira para ele ser
if(cond1 && (cond2 || cond3)){
    alert("Eh bissexto")
} else{
    alert("Nao eh bissexto")
}
