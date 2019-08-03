var prec_fab = prompt("preço de fábrica: ")
var lucro = prompt("lucro em porcentagem")
var imp = prompt("imposto em porcentagem ")
//divide por 100 para calcular em porcentagem
lucro = lucro / 100
lucro = prec_fab * lucro
imp = imp/100
imp = prec_fab * imp
//valor final somando tudo, o parseInt converte em inteiro e evita a concatenação
var valor = parseInt(prec_fab) + parseInt(lucro) + parseInt(imp)
alert("Lucro: "+lucro+"\nImposto: "+imp+"\nValor: "+valor)
