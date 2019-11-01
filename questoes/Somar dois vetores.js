//abaixo é declarado 3 listas(vetor, array) 
var veca = []
var vecb = []
var vecc = []
//o for é executado 10 vezes 
for(var e = 0; e < 10;e ++) {
   var n = prompt('numero: ')
   //cada número que é digitado pelo usuário é adicionado na lista através do método push
   veca.push(n)
}
//o for é executado 10 vezes
for(var e = 0; e < 10;e ++) {
   var n = prompt('numero: ')
   //cada número que é digitado pelo usuário é adicionado na lista através do método push
   vecb.push(n)
}
//o for é executado 10 vezes
for(var e = 0; e < 10;e ++) {
   //cada elemento das duas listas são somados com base sua posição, ex(veca[0] + vecb[o])
   //o parseInt transforma os elementos em inteiros para que seja possivel a soma
   var n = parseInt(veca[e]) + parseInt(vecb[e])
   //os elementos somados são adicionados na 3 lista
   vecc.push(n)
}
//os elementos da 3 lista são separados por espaço através do join
var vc = vecc.join(" ")
alert(vc)

*/outra forma de fazer*/
var vca = []
var vcb = []
var vcc = []
var msg = ''
for(var e = 0; e < 10;e++){
    var num = parseInt(prompt("Num:"))
    vca[e] = num
}
for(var e = 0; e < 10;e++){
    var num = parseInt(prompt("Num:"))
    vcb[e] = num
}
for(var e = 0; e < 10;e++){
    vcc[e] = vca[e] + vcb[e]
    msg+=vcc[e]+" "
}
alert(msg)
