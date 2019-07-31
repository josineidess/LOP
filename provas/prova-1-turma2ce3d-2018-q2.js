var num = prompt('n: ')
if(num < 1000){
alert(num+' ')
}
rodar = true
//exibe todos os multiplos de 5 do número até 1000
while(rodar){
    num = num * 5
    if(num > 1000) {
        break
    }
    alert(num+' ')
}