var num_mult = []

var num = parseInt(prompt("num: "))
var q = 0
while(num !== 0){
    if(num % 3 === 0 || num % 7 === 0 ){
        num_mult.push(num)
        q += 1
    }
    num = parseInt(prompt("num: "))
    if(num === 0){
        alert(q)
        break
    }
}
