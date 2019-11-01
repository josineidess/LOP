var vetor = []
var msg = ''
for(var e = 0; e < 12;e++){
    var n = parseFloat(prompt("num: "))
    vetor[e] = n
    if(e%2==0){
        msg+=Math.sqrt(n)+" "
    }else{
        msg+=Math.pow(n,3)+" "
    }
}
alert(msg)
/*outra forma de fazer*/

var new_l = []
//o laço for se repete 12 vezes
for(var e = 0; e < 12; e ++){
    a = prompt('num: ')
    //checa se o índice do número é par
    if(e % 2 == 0){
      //Math é um objeto que tem métodos embutidos muito úteis para a resolução de problemas matemáticos,
      //o método usado foi sqrt que é para raiz quadrada
      var t = Math.sqrt(a)
      //o numero recebido é adicionado na lista
      new_l.push(t)
    } else {
      var y = a ** 3
      //o numero recebido é adicionado na lista
      new_l.push(y)
    }
  }
//join separa os elementos da lista em espaços
var lista = new_l.join(" ")
alert(lista)

//obs: não achei necessidade de criar duas listas como foi pedido
//mas se o professor for chato... o código ficaria assim
//obs: ignore o /* e */ ele é usado para marcar comentários de mais de uma linha, o // é só para uma
/*
var num = []
var new_l = []
for(var i = 0; i < 12; i++){
  a = prompt('num: ')
  num.push(a)
}

for(var e = 0; e < 12; e ++){
    if(e % 2 == 0){
      var t = Math.sqrt(num[e])
      new_l.push(t)
    } else {
      var y = num[e] ** 3
      new_l.push(y)
    }
  }
var lista = new_l.join(" ")
alert(lista)
*/
