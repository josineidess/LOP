var num = prompt('num: ')
var vetor = []
//charAt pega o elemento do respectivo índice
var p0 = num.charAt(0)
var p1 = num.charAt(1)
var p2 = num.charAt(2)

vetor.push(p2)
vetor.push(p0)
vetor.push(p1)
//join separa os elementos, nesse caso ele não separa por nada
vetor = vetor.join("")
alert(vetor)
