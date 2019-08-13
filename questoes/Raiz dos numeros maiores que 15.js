var num = parseInt(prompt("num: "))
var lista = []
var n = "-4"
n = parseInt(n)

while(num != n){
    if(num > 15){
    var raiz = Math.sqrt(num)
    lista.push(raiz)
    };
    num = parseInt(prompt("num: "));
    if(num == n){
        lista = lista.join(" ")
        alert(lista)
        break
    }
}
