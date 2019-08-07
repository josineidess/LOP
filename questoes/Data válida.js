var d = prompt("dia: ")
var m = prompt("mês: ")
var a = prompt("ano: ")
var cond1 = (a % 4 == 0)
var cond2 = (a % 100 != 0)
var cond3 = (a % 400 == 0)
var bis = cond1 && (cond2 || cond3)
var validD1 = d > 0 &&  d <= 31
var validM = m > 0 && m <= 12
var validA = a > 0
if(validD1 && validM && validA){
    if(m == 2 && d == 29){
        if(bis){
            alert("Valida")
        }else{
            alert("Invalida")
        }
    
    }else if(m == 2 && d < 29){
        alert("Valida")
    }else if(m != 2){
        alert("Valida")
    }
}else{
    alert("Invalida")
}
