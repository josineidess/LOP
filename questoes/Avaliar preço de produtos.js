var quant = prompt("quantidade de produtos: ")
var vetor_p = []
var r = quant
//o while repete até o usuário digitar todos os preços
while(r > 0){
    var preco = prompt('preço do produto: ')
    //os preços são adicionados na lista
    vetor_p.push(preco)
    r -= 1
}
//variáveis que armazenam a quantidade dos produtos nas respectivas faixas de preços
var q_p50 = 0
var q_p100 = 0
var m_p100 = 0
var q_ms100 = 0
var media100 = 0
//o laço for repete o número de vezes que tiver a variável quant
for(var e = 0; e < vetor_p.length;e++){
    //condição que checa a primeira faixa de preço
    if(vetor_p[e] < 50.00){
        q_p50 += 1
    //condição que checa intervalo da segunda faixa de preço
    }else if(vetor_p[e] >= 50.00 && vetor_p[e] <= 100.00){
        q_p100 += 1
    //condição que checa a 3 faixa de preço
    }else if(vetor_p[e] > 100.00){
        q_ms100 += 1
        //não esquecer se usar parseInt, se não o programa concatena em vez de somar
        m_p100 += parseInt(vetor_p[e])
    }
}
//condição que checa se a quantidade de produtos acima de 100 é maior que 0 para fazer média dos produtos
if(q_ms100 > 0){
   media100 = m_p100 / q_ms100
} else {
    media100 = 0
}
alert("Quantidade de produtos menores que 50 R$: "+q_p50+"\nQuantidade de produtos entre 50 R$ e 100 R$: "+q_p100+
"\nQuantidade de produtos media dos maiores que 100 R$: "+media100)
