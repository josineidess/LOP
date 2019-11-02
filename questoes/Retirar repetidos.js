var n = parseInt(prompt("tamanho: "))
var vetor = []
var vetorb = []
var msg = ''
for(var e = 0;e<n;e++){
    vetor[e] = parseInt(prompt("valor: "))
}
for(var i = 0; i < n;i++){
        if(i>0){
            for(var r = 0;r<i;r++){
                if(vetorb[r]==vetor[i]){
                    vetorb[i]=0
                    
                }
            } 
            if(vetorb[i]!=0){
                vetorb[i]=vetor[i]
                msg+=vetorb[i]+" "
            }
        
        }else{
            vetorb[i] = vetor[i]
            msg+=vetorb[i]+" "
        } 
}
alert(msg)

 | 
 |
 |
\ /
 
//mas pra que complicar a vida se temos ES6 agr?
var quant = prompt('quant: ')
var vetor = []
for(let e = 0;e < quant; e ++){
    let num = prompt("num: ")
    vetor.push(num)
}
//...new Set novo método do ES6 que filtra os elementos repetidos
var n_vetor = [ ...new Set( vetor ) ]
n_vetor = n_vetor.join(" ")
alert(n_vetor)
