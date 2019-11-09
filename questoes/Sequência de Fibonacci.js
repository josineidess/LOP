var n = parseInt(prompt("num: "))
var x1 = 1
var x2 = 1
var x3 = x1+x2
var soma = x1+x2+x3
for(var e = 3;e < n;e++){
    x1 = x2
    x2 = x3
    x3 = x1+x2
    soma+=x3
}
alert(soma)
