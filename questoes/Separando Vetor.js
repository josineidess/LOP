var vetor_geral = []
var vetor_par = []
var vetor_impar = []
for(var e = 0;e < 20;e++){
    var n = parseInt(prompt("num: "))
    vetor_geral[e] = n
}
for(var e = 0,p=0,i=0;e < 20;e++){
    if(vetor_geral[e]%2==0){
        vetor_par[p]=vetor_geral[e]
        p++
    } else{
        vetor_impar[i]=vetor_geral[e]
        i++
    }
}
alert("Pares: "+vetor_par+"\nImpares: "+vetor_impar)

/*usando o método push*/

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
