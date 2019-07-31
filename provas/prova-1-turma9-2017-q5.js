//Entradas do usuário
var popa = prompt('popa: ')
var popb = prompt('popb: ')
var txa = prompt('txa: ')
var txb = prompt('txa: ')
anos = 0
//condição para o loop 
rodar = true
while(rodar) {
//atualização das variáveis das populações em forma de juros, parseInt transforma em inteiro
popa = parseInt(popa) + (popa*txa)
popb = parseInt(popb) + (popb*txb)
//a cada atualização acrescenta-se um ano
anos +=1
//quando a população A superar a B o resultado é exibido
if(popa > popb) {
  rodar = false
  //\n quebra a linha
  alert(anos + ' anos\n')
  //o programa checa se o usuário quer fazer outro teste, se não o programa é finalizado
  var novo_teste = prompt('deseja terminar?')
  if (novo_teste == 'n'){
     rodar = false
     break
  }//se sim as variáveis são atualizadas e o loop continua
  else if(novo_teste == 's') {
      popa = prompt('popa: ')
      popb = prompt('popb: ')
      txa = prompt('txa: ')
      txb = prompt('txa: ')
      anos = 0
      rodar = true
  }
 }
}


