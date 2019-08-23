// Rascunho de 23/08/2019 - 18:10:48

var n = parseInt(prompt("num: "))
//1-terça,2-quarta,3-quinta,4-sexta,5-sábado,6-domingo
var dia = n % 7
if(n < 365) {
    
if(n == 1) {
    alert("terca-feira")
} else{
    if(dia == 2){
        alert("quarta-feira")
    }else{
        if(dia == 3){
            alert("quinta-feira")
        }else{
            if(dia == 4) {
                alert("sexta-feira")
            } else{
                if(dia == 5) {
                    alert("sábado")
                }else{
                    if(dia == 6){
                        alert("domingo")
                    }else{
                        if(dia == 0){
                            alert("segunda-feira")
                        }
                    }
                }
            }
        }
    }
}
    
} 
else{
    if(n == 365){
        alert("terca-feira")
    }else{
    alert("2013 possui apenas 365 dias")
}}
