var vetor = []
var n = parseInt(prompt("numero: "))
for(var e = 0;e<n;e++){
    var num = parseInt(prompt("num: "))
    if(num % 3 == 0 && num % 4 == 0 && num != 0){
        vetor[e] = num
    }else{
        e--
    }
}
alert(vetor)

/*com while*/

var vetor = []
var q = prompt('quant: ')
//o while repete o número de vezes da entrada q
while(q > 0){
    var num = prompt('num: ')
    //condição que checa se o número é multiplo de 3 e 4 e difirente de 0
    if(num % 3 === 0 && num % 4 === 0 && num != 0){
        //esse é um decremento é a mesma coisa que q = q - 1 ou q-=1
        q--
        //se cumprir as condições ele é adicionado
        vetor[q] = num
    }
}
alert(vetor)
