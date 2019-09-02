var idade = parseInt(prompt("idade: "))
t = 0
p15 = 0
if(idade > 15){
        
    }else{
        
}
while(idade != 0){
    if(idade > 15){
        p15+=1
        t+=1
    }else{
        t+=1
    }
    var idade = parseInt(prompt("idade: "))
}
if(p15 > 0){
    var pp = (p15*100) / t
} else{
    var pp = 0
}
alert(pp+"%")
