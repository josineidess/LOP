var ta = parseInt(prompt("tamanho a:"))
var tb = parseInt(prompt("tamanho b: "))
var vetora = []
var vetorb = []
var vetorc = []
for(var e = 0;e<ta;e++){
    vetora[e] = parseInt(prompt("num: "))
}
for(var e = 0;e<tb;e++){
    vetorb[e] = parseInt(prompt("num: "))
}
for(var e = 0,r=ta,k=0;e<(ta+tb);e++){
      if(r>0){
          vetorc[e]=vetora[e]
      }else{
          vetorc[e]=vetorb[k]
          k++
      }
      r--
    }

alert(vetorc)

/* usando o método concat*/

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
