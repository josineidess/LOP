var n = 22
var num = ""
while(n <= 53){
    num += n +" "
    if(n <= 30){
    n+=3
    } else{
        if(n > 30 && n < 40){
            n+=4
        }else{
            n+=5
        }
    }
}
alert(num)
