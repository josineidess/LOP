//forma simples
var a = parseInt(prompt("a:"))
var b = parseInt(prompt("b:"))
var c = parseInt(prompt("c:"))
if((c > a && c < b) || (c < a && c > b)){
alert("pertence")
}else{
alert("nao pertence")
}

//forma estranha
var array = []
var a = array[0] = prompt('a: ')
var b = array[1] = prompt('b: ')
var c = array[2] = prompt('c: ')
//ordena em ordem crescente os elementos da lista
array = array.sort()
if(c == array[1]){
    alert("Pertence")
}else{
    alert("Nao pertence")
}
