var d0 = prompt("dia: ");
var m0 = prompt("mês: ");
var a0 = prompt("ano: ");
var d1 = prompt("dia: ");
var m1 = prompt("mês: ");
var a1 = prompt("ano: ");
//calcula a quantidade de dias nos meses
m0 = m0 * 30;
//calcula a quantidade de dias nos anos
a0 = a0 * 365;
m1 = m1 * 30;
a1 = a1 * 365;
//soma todos os dias
var dias0 = parseInt(d0) + parseInt(m0) + parseInt(a0);
var dias1 = parseInt(d1) + parseInt(m1) + parseInt(a1);
//subtrai o total de dias da segunda data pela quantidade de dias da primeira
alert(dias1 - dias0);
