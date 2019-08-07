var n1 = parseFloat(prompt("Nota1: "))
var n2 = parseFloat(prompt("Nota2: "))
var media = (n1 * 5 + n2 * 6)/11

if(media >= 7){
    alert("Aprovado")
}else if(media >= 3 && media < 7 ){
    var prep = parseFloat(prompt("Recuperação: "))
    mfinal = (Math.min(n1,n2) + prep) / 2
    if(mfinal >= 7){
        alert("Aprovado")
    }else if(mfinal < 7){
        alert("Reprovado")
    }
}else if(media < 3){
    alert("Reprovado")
}
