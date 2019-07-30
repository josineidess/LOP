var x = prompt('x: ')
var y = prompt('y: ')
//O operador && significa and, ele só é verdadeiro se todas as condições forem
//O operador != significa direrente
if(x > 0 && y > 0) {
    alert('Q1')
} else if(x < 0 && y > 0){
    alert('Q2')
} else if(x < 0 && y < 0) {
    alert('Q3')
} else if(x > 0 && y < 0) {
    alert('Q4')
}else if(x != 0 && y == 0) {
    alert('Eixo X')
}else if(x == 0 && y != 0) {
    alert('Eixo Y')
}else if(x == 0 && y == 0) {
    alert('Origem')
}