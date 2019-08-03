//pra que complicar a vida se temos ES6 agr?
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
