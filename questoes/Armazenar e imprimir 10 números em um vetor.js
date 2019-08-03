// [] é usado para representar uma lista
var num = []
// o laço for é executado 10 vezes
for(var e = 0; e < 10;e ++) {
   var n = prompt('numero: ')
   //o método push adiciona elementos a lista, nesse caso ele está adicionando o numero digitado pelo usuário a lista num
   num.push(n)
}
//o método reverse inverte a ordem dos elementos da lista, se era [0,1,2] fica [2,1,0]
var n_nums = num.reverse()
//o join separa os elementos pelo que for pedido, nesse caso espaço(" ")
var b = n_nums.join(" ")
alert(b)
