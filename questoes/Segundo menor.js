var n = parseInt(prompt("num: "))
var menor = 0,s_menor=0;
for(var e = 0;e < n;e++){
    var num = parseInt(prompt("numero: "))
    if(e === 0){
        menor = num
    }
    if(e===1){
        if(num < menor){
            s_menor = menor
            menor = num
        }else{
            s_menor = num
        }
    }else{
        if(num < menor){
            s_menor = menor
            menor = num
        }else{
            if(num < s_menor){
            s_menor = num
        }}
    }
    
}
alert(s_menor)
