//[]: lista, push: adiciona a lista, reverse: reverte a ordem,join: 'separa' os elementos 
var a = []
for(var e = 0;e < 10;e++){
    var n = prompt('n: ')
    a.push(n)
}
var b = a.reverse()
var f = b.join(" ")
alert(f)

*/outra forma de fazer/*
var vetor_a = []
var vetor_b = []
var i = 9
var msg = ''
for(var e = 0; e < 10;e++){
    var n = parseInt(prompt("num: "))
    vetor_a[e] = n
    vetor_b[i] = n
    i--
}
for(var r = 0; r < 10;r++){
    msg+=vetor_b[r]+" "
}
alert(msg)
