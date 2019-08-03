//recebe string
var Str = prompt('entrada: ')
var array = []
//for se repete até que e seja menor que o número de caracteres da string recebida
for(var e = 0;e < Str.length;e ++){
    //charAt(e) mostra o elemento da string naquele respectivo índice
    array.push(Str.charAt(e))
}
//reverse inverte a ordem da lista
var array = array.reverse()
//join separa os elementos, nesse caso em nada ele serve de lipador de vírgula aqui
var array = array.join("")
alert(array)
