var msg = ''
var vetor_string = []
for(var e = 0;e < 15;e++){
    var n = prompt("letra: ")
    vetor_string[e] = n
}
var entrada = prompt("busca:")
for(var e = 0;e < 15;e++){
    if(entrada == vetor_string[e]){
        msg+=e+" "
    }
}
alert(msg)
