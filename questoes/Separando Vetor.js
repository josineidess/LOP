var vetor = []
var vetor_par = []
var vetor_impar = []
//laço for se repete 20 vezes
for(var e = 0; e < 20;e ++){
    var num = prompt('num: ')
    vetor.push(num)
}
for(var e = 0; e < 20;e ++){
    //checa se é par
    if(vetor[e] % 2 === 0){
        vetor_par.push(vetor[e])
    }else {
        vetor_impar.push(vetor[e])
    }
}
alert("Pares: "+vetor_par+"\nImpares: "+vetor_impar)
