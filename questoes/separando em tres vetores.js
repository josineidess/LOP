var vetora = []
var vetorb = []
var vetorc = []
for(let e = 0;e < 20;e++){
    var num = parseInt(prompt("valor"))
    if(num % 3 == 0 || num % 4 == 0){
        if(num % 3 == 0 && num % 4 == 0){
            vetora.push(num)
            vetorb.push(num)
        }else{
            if(num % 3 == 0){
                vetora.push(num)
            }else{
                vetorb.push(num)
            }
        }
    } else{
        vetorc.push(num)
    }
}
alert(`a)${vetora.join(",")}\nb)${vetorb.join(",")}\nc)${vetorc.join(",")}`)
