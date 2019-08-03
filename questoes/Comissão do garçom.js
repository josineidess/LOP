var valor = prompt("valor: ")
var com = valor * 0.1
//parseFloat converte em inteiro decimal, ou seja permite casas decimais
var total = parseFloat(valor) + parseFloat(com)
alert("Subtotal: "+valor+"\nComissao: "+com+"\nTotal: "+total)
