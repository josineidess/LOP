var num = prompt("n: ")
//o laço for é executado até e ser maior ou igual ao número digitado
for(var e = 0; e <= num; e ++) {
    //checa se é divisível através do operador de resto(%)
    if(num % e == 0) {
        alert(e + ' ')
    }
}