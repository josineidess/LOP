var num = prompt('numero: ')
var n = num.split(".")
n[1] = parseFloat(n[1])
n[0] = parseFloat(n[0])
if(n[1] >= 5){
    alert(n[0] + 1)
}else if(n[1] < 5){
    alert(n[0])
}else{
    alert(num)
}
