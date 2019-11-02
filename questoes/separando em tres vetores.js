var vetor_geral = []
var vetor_m_3 = []
var vetor_m_4 = []
var vetor_nm = []
for(var e = 0;e < 20;e++){
    var n = parseInt(prompt("numero: "))
    vetor_geral[e] = n
}
for(var e = 0,m_3 = 0,m_4 = 0,nm = 0;e < 20;e++){
    if(vetor_geral[e]%3 == 0 || vetor_geral[e]%4==0){
        if(vetor_geral[e]%3 == 0 && vetor_geral[e]%4==0){
            vetor_m_3[m_3]=vetor_geral[e]
            vetor_m_4[m_4]=vetor_geral[e]
            m_4++
            m_4++
        }else{
            if(vetor_geral[e]%3==0){
                vetor_m_3[m_3] = vetor_geral[e]
                m_3++
            }else{
                vetor_m_4[m_4]=vetor_geral[e]
                m_4++
            }
        }
    }else{
        vetor_nm[nm] = vetor_geral[e]
        nm++
    }
}
alert("a)"+vetor_m_3+"\nb)"+vetor_m_4+"\nc)"+vetor_nm)
/*usando o push*/

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
