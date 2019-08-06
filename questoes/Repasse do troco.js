var num = prompt("valor: ");

lista = [100,50,20,10,5,2,1,0.5,0.25,0.1,0.05];
lista2 = [100,50,20,10,5,2,1,0.5,0.25,0.1,0.05];

for (let e = 0; e < lista.length; e ++) {
   if (num > lista[e]) {
       
      if (0.25 > num > 0.1) {
        if (num == 0.1) {
        lista[9] = 1;
        valor = 0;
            
        } else {
        lista[9] = Math.round(num/0.1);
        valor = num % lista[e];
        }
        
      } else {
      a = Math.trunc(num/lista[e]);
      num = num % lista[e];
      lista[e] = parseInt(lista[e]) + parseInt(a);
     }
       
   }
}

for(let e = 0;e < lista.length; e ++){
   lista[e] = Math.round(lista[e] - lista2[e]);
}

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
