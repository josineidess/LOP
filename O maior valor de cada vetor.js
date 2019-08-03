var vetora = []
var vetorb = []
var vetorc = []
for(let e = 0; e < 10;e ++){
    let el = prompt('num: ')
    vetora.push(el)
}
for(let e = 0;e < 10;e++){
    let el = prompt('num: ')
    vetorb.push(el)
}
for(let e = 0; e < 10; e ++) {
    if(vetora[e] > vetorb[e]){
        vetorc.push(vetora[e])
    }else {
        vetorc.push(vetorb[e])
    }
}
alert(vetorc)
