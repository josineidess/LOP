var array = []
var num = prompt("num: ")
while(num != 22){
    array.push(num)
    num = prompt("num: ")
    if(num == 22){
        array = array.join(" ")
        alert(array)
    }
}
