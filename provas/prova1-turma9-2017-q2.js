//declaração de variáveis
var med = 0
var dir = 0
var eng = 0
var entr = 0
var p_eng = 0
var p_dir = 0
var p_med = 0
var total = 0
//prompt recebe umas dessas opções de curso através do navegador
var curso = prompt('D - Direito,M - Medicina,E - Engenharia, S - Sair')
//estrutura de repetição que checa qual curso foi escolhido
if(curso == 'M') {
        med += 1
        entr += 1
        total += 1
    } else if(curso == 'D') {
        dir += 1
        entr += 1
        total += 1
    } else if(curso == 'E') {
        eng += 1
        entr += 1
        total += 1
    }
//Se o usuário não apertar S esse laço continua
while(curso != 'S') {
    //Exibe novamente as opções
    var curso = prompt('D - Direito,M - Medicina,E - Engenharia, S - Sair')
    //Novamente checa qual o curso escolhido
    if(curso == 'M') {
        med += 1
        entr += 1
        total += 1
    } else if(curso == 'D') {
        dir += 1
        entr += 1
        total += 1
    } else if(curso == 'E') {
        eng += 1
        entr += 1
        total += 1
    }
    //Quando o usuário aperta S o programa exibe o total de entrevistados e a porcentagem de cada curso
    else if(curso == 'S') {
        //Estrutura que calcula a porcentagem se tal curso foi escolhido
        if(med > 0) {p_med = (med*100)/total}
        if(dir > 0) {p_dir = (dir*100)/total}
        if(eng > 0) {p_eng = (eng*100)/total}
        //alert exibe uma caixa no navegador com os dados citados acima na linha 44
        alert('Total de entrevistados: ' + entr +'\n Engenharia: '+p_eng+'% \nDireito: '+p_dir+'% \nMedicina: '+p_med+'%')
        //O comando break para o programa
        break
        //Se o usuário não digitar nenhuma opção que foi proposta o programa exibe uma mensagem de invalidez
    } else if(curso =! 'S' && curso != 'D' && curso != 'M' && curso != 'E') {
        alert('Digite uma opção válida!')
    }
}