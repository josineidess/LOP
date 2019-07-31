var habitantes = prompt('Quantidade de habitantes: ')
var cand1 = 0
var cand2 = 0
var cand3 = 0
var nulo = 0
//variáveis de porcentagens
var p_c1 = 0
var p_c2 = 0
var p_c3 = 0
var p_nl = 0
//laço que pede o voto até acabar os habitantes
for(var v = 0; v < habitantes;v++) {
    voto = prompt('voto: ')
    if(voto == 1){
        cand1 += 1
    } else if(voto == 2){
        cand2 += 1
    } else if(voto == 3) {
        cand3 += 1
    } else if(voto == 4) {
        nulo += 1
    }
}
//condição que calcula a porcentagem se tiver algum voto
if(cand1 > 0) {
    p_c1 = (cand1 * 100) / habitantes
}
if(cand2 > 0) {
    p_c2 = (cand2 * 100) / habitantes
}
if(cand3 > 0) {
    p_c3 = (cand3 * 100) / habitantes
}
if(nulo > 0) {
    p_nl = (nulo * 100) / habitantes
}

alert('candidato 1: '+ p_c1+'%\ncandidato 2: '+p_c2+'%\ncandidato 3: '+p_c3+'%\nbrancos ou nulos: '+p_nl+'%')
