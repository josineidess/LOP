var n = 0
var a1 = parseFloat(prompt("primeiro termo"))
var r = parseFloat(prompt("razao"))
var u = parseFloat(prompt("numero: "))
vz = []
vz.push(a1)
while(n < u){
   n = a1*r
   a1 = n
   vz.push(n)
}
vz.pop()
alert(vz.join(" "))
