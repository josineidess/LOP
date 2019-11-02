var vetora = [],vetorb = [],vetorc = []
for(var e = 0;e < 10;e++){
    var n = parseInt(prompt("num: "))
    vetora[e] = n
}
for(var i = 0;i < 10;i++){
    var n = parseInt(prompt("num: "))
    vetorb[i] = n
}
for(var e = 0;e < 10;e++){
    if(vetora[e] > vetorb[e]){
        vetorc[e] = vetora[e]
    }else{
        vetorc[e] = vetorb[e]
    }
}
alert(vetorc)


/*usando método push*/

var vetora = []
var vetorb = []
var vetorc = []
//laço for adiciona 10 elementos digitados pelo usuário a lista
for(let e = 0; e < 10;e ++){
    let el = prompt('num: ')
    vetora.push(el)
    //converte em inteiro
    vetora[e] = parseInt(vetora[e])
}
//laço for adiciona 10 elementos digitados pelo usuário a lista
for(let e = 0;e < 10;e++){
    let el = prompt('num: ')
    vetorb.push(el)
    vetorb[e] = parseInt(vetorb[e])
}
//laço for compara as listas
for(let e = 0; e < 10; e ++) {
    if(vetora[e] > vetorb[e]){
        vetorc.push(vetora[e])
    }else {
        vetorc.push(vetorb[e])
    }
}
alert(vetorc)
