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
