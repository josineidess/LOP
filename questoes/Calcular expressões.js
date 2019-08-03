var a = 1.5
var b = 4
var c = 2
var d = 3
var e = 1.2
var f = 4.3
var r_a = (a * (c + d)) / (b * (e + f))
var r_b = ((a ** (b+c)) / (e + f)) + d
//é só se ligar na ordem de precedência dos operadores e meter parênteses mesmo
var r_c = (a + ((((c+d)**2)/ (b**2)))*d)*(1/c)
var delta = (b ** 2) - 4*a*c
//Math é um objeto com muitos métodos embutidos que são muito úteis para resolução de problemas matemáticos, o sqrt calcula a raiz quadrada
var r_d = (-1*b + (Math.sqrt(delta))) / 2
alert("a) "+r_a+"\nb) "+r_b+"\nc) "+r_c+"\nd) "+r_d)
