var y = parseInt(prompt("n: "))
var a = 0
var b = 0
var c = 0
var d = 0
var q_d = 0
var e = 0
for(var t = 0; t < y;t++){
    var n = parseInt(prompt("num:"))
    if(n < 100 && n > -100){
        a++
    }if(n % 5==0 || n % 7==0){
        b+=n
    }if(n>c){
        c=n
    }if(n%2==0){
        q_d++
        d+=n
    }if(n%2!=0){
        e++
    }
}
var media_p = d/q_d
var porc = (e*100)/y
alert(a+" "+b+" "+c+" "+media_p+" "+porc+"%")
