var veca = []
var vecb = []
var vecc = []
for(var e = 0; e < 10;e ++) {
   var n = prompt('numero: ')
   veca.push(n)
}
for(var e = 0; e < 10;e ++) {
   var n = prompt('numero: ')
   vecb.push(n)
}
for(var e = 0; e < 10;e ++) {
   var n = parseInt(veca[e]) + parseInt(vecb[e])
   vecc.push(n)
}
var vc = vecc.join(" ")
alert(vc)