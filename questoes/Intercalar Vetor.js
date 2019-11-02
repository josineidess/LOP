var a =  []
var b = []
var c = []
for(var e = 0;e < 10;e++){
    var n = parseInt(prompt("num: "))
    a[e] = n
}
for(var e = 0;e < 10;e++){
    var n = parseInt(prompt("num: "))
    b[e] = n
}
for(var e = 0,r = 0;e < 20;e+=2){
    c[e]=a[r]
    c[e+1]=b[r]
    r++
}
alert(c)
/*usando push*/

var vetora = []
var vetorb = []
var vetorc = []
//recebe as 10 entradas e armazena no vetora
for(let c = 0;c < 10; c ++){
    var num = prompt('num: ')
    vetora.push(num)
}
//recebe as 10 entradas e armazena no vetorb
for(let c = 0;c < 10; c ++){
    var num = prompt('num: ')
    vetorb.push(num)
}
//intercala o armazena no vetorc entra o vetora e o vetorb 
for(let c = 0;c < 10; c ++){
    vetorc.push(vetora[c])
    vetorc.push(vetorb[c])
}
alert(vetorc)
