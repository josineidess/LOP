var num = prompt('n: ')
//laço que vai de 100 a 400
for(var e = 100;e < 400;e ++) {
    //filtra os números que estão entre 100 e 400 que divididos por num tem testo 5 
    if(e % num == 5){
        alert(e+' ')
    }
}