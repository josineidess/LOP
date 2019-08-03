//prompt é um comando de entrada, ele recebe o que pe digitado
var total = prompt('total: ')
e = 0
//[] representa lista
nums = []
par = []
//while é um bloco de repetição que só para quando a condição entre parênteses se torna falsa
while(e < total) {
    var n = prompt('num: ')
    //push adiciona elementos a lista
    nums.push(n)
    //++ é um incremento é a mesma coisa que e += 1 ou e = e + 1
    e ++
}
//for é um laço que é rodado até o número de vezes que o usuário digitou em total
for(var r = 0;r < total;r ++) {
    //o if(se) checa se o número é par, para isso o operador %(resto) é usado
    if(r % 2 == 0){
        //se for par ele adiciona através do método push o elemento que está naquela posição da lista
        par.push(nums[r])
    }
}
//o join separa os elementos por espaços nesse caso
var tt = par.join(" ")
alert(tt)


//obs: as listas sempre começam do 0, ou seja para imprimir o primeiro elemento da lista seria alert(lista[0])
