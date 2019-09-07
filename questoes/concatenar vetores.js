var qa = parseInt(prompt("quantidade vetor1: "))
var qb = parseInt(prompt("quantidade vetor2: "))
a = []
for(let e = 0;e < qa;e++){
    var num = parseInt(prompt("valor: "))
    a.push(num)
}
var b = []
for(let e = 0;e < qb;e++){
    var num = parseInt(prompt("valor: "))
    b.push(num)
}
var c = []
c = c.concat(a,b)
alert(c.join(","))
