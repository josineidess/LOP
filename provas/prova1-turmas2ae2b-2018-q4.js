var a = prompt('valor: ')
//intervalo entre 0 e 20
if(0 <= a && a <= 20) {
    if(a == 20.00){
        alert('[0,20]')
    } else{ 
    alert('(0,20]')
    }
//intervalo entre 20 e 40
}else if(20 < a && a <= 40) {
    if(a == 40.00){
        alert('[20,40]')
    } else{ 
    alert('(0,40]')
    }
//intervalo entre 40 e 70
}else if(40 < a && a <= 70) {
    if(a == 70.00){
        alert('[0,70]')
    } else{ 
    alert('(40,70]')
    }
//intervalo entre 70 e 100
}else if(70 < a && a <= 100) {
    if(a == 100.00){
        alert('[70,100]')
    } else{ 
    alert('(70,100]')
    }
//nenhum intervalo 
}else {
    alert('Fora')
}