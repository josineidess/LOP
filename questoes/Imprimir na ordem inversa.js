//[]: lista, push: adiciona a lista, reverse: reverte a ordem,join: 'separa' os elementos 
var a = []
for(var e = 0;e < 10;e++){
    var n = prompt('n: ')
    a.push(n)
}
var b = a.reverse()
var f = b.join(" ")
alert(f)
