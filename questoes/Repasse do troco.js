var num = prompt("valor: ");

//a ideia de criar duas listas é para subtrair uma da outra e ver quantas notas e moedas tem de casa valor

lista = [100,50,20,10,5,2,1,0.5,0.25,0.1,0.05];
lista2 = [100,50,20,10,5,2,1,0.5,0.25,0.1,0.05];
//for se repete a quantidade de vezes que a lista tem de elementos
for (let e = 0; e < lista.length; e ++) {
   if (num > lista[e]) {
       //checa se o numero está entre 0.25 e 0.1 para não dar erro de arredondamento
      if (0.25 > num > 0.1) {
        if (num == 0.1) {
        //se o valor for exatamente 0.1 o valor da posição da moeda 0.1 muda para 1
        lista[9] = 1;
        valor = 0;
        //se não o valor será a divisão inteira
        } else {
        //Math.round arredonda para cima
        lista[9] = Math.round(num/0.1);
        valor = num % lista[e];
        }
      //se o valor não estiver entre os valores citados acima, divide-se o número pelo valor da nota ou meoeda e atualiza o valor
      } else {
      //Math.trunc arredonda para baixo
      a = Math.trunc(num/lista[e]);
      num = num % lista[e];
      //valor atualizado
      lista[e] = parseInt(lista[e]) + parseInt(a);
     }
       
   }
}
//subtrai a lista da lista2 para se obter a quantidade de notas e moedas
for(let e = 0;e < lista.length; e ++){
   lista[e] = Math.round(lista[e] - lista2[e]);
}
//exibe os valores modificados que são exatamente a quantidade de notas e moedas 
alert(
lista[0] + " Notas de 100 Reais\n"+
lista[1] + " Notas de 50 Reais\n" +
lista[2] + " Notas de 20 Reais\n" + 
lista[3] + " Notas de 10 Reais\n" +
lista[4] + " Notas de 5 Reais\n" +
lista[5] + " Notas de 2 Reais\n" + 
lista[6] + " Moedas de 1 Real\n" + 
lista[7] + " Moedas de 50 Centavos\n" +
lista[8] + " Moedas de 25 Centavos\n" +
lista[9] + " Moedas de 10 Centavos\n" + 
lista[10]+ " Moedas de 5 Centavos");
