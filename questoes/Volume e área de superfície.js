//variáveis
var rmenor = prompt('raio menor: ')
var rmaior = prompt('raio maior: ')
var h = prompt('altura: ')
//calculo da área lateral
var g = parseInt(h**2) + ((parseInt(rmaior) - parseInt(rmenor))**2)
g = Math.sqrt(g)
var area_lateral = 3.14159265 *(g)*(parseInt(rmaior) + parseInt(rmenor)) 
//cálculo do volume
var volp1 =  (3.14159265 * h / 3)
r1 = rmaior**2
r2 = rmenor ** 2
var volp2 = parseInt(r1) + parseInt(rmaior * rmenor) + parseInt(r2) 
var volume = volp1 * volp2
//exibir
alert("V: "+volume+" e A: "+area_lateral)
