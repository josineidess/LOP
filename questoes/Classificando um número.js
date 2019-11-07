'''repetição contada(for)'''

var n = parseInt(prompt("num: "))
var cont = 1
var divs = ''
if(n%2===1 && n < 15){
    var f = n-1
    var fat = n
    while(f>0){
        fat = fat * f
        f--
    }
    alert(fat)
}else{
    if(n%2===0){
        for(var e = 1;e <= n;e++){
            if(n%e===0){
                divs+=e+" "
            }
        }
        alert(divs)
    }
    else{
      if(n%2==1 && n >= 15){
        for(var e = 2; e <= n;e++){
        cont+=e
   }
   alert(cont)   
  }
        
    }
    
}

'''com while'''

var n = parseInt(prompt("num: "))
var div = 2
var msg = "1"+' '
var cont=1
var x3 = 0

if(n%2==0){
    while(n >= div){
        if(n%div==0){
            msg+=div+" "
        }
        div++
    }
    alert(msg)
}
else{
    if(n < 15){
        var k = n - 1
        while(k!=0){
            n = n * k
            k--
        }
        alert(n)
     }else{
        var p = n
        for(var e = 1;e<=p;e++){
        x3+=e
        }
        alert(x3)
}
}
