var num = prompt("numero: ")
var lis = []
if(num < 10000){
    lis.push(num)
    for(let e = 1; num < 10000;e++){
        lis[e] = num * 3
        num = lis[e]
    }
}if(num > 1000){
    lis = lis.join(" ")
    alert(lis)
}
