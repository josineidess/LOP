var num = parseFloat(prompt("num: "))
var m = 'Eh primo'

if(num == 1 || num == 2){
    if(num == 1){
        m = 'Nao eh primo'
    }else{
        m = 'Eh primo'
    }
}else{
for(var e = 2; e < num;e++){
        if(num % e == 0){
            m = 'Nao eh primo'
            break
        }
}

}
alert(m)
