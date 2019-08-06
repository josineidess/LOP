var n = prompt("num: ")
c1 = n % 3 == 0 && n % 4 != 0 && n % 5 != 0
c2 = n % 4 == 0 && n % 3 != 0 && n % 5 != 0
c3 = n % 5 == 0 && n % 4 != 0 && n % 3 != 0
c4 = n % 3 == 0 && n % 4 == 0 && n % 5 != 0
c5 = n % 3 == 0 && n % 4 != 0 && n % 5 == 0
c6 = n % 3 != 0 && n % 4 == 0 && n % 5 == 0
c7 = n % 3 == 0 && n % 4 == 0 && n % 5 == 0
if(c1){
    alert("Divisivel por 3")
} else if(c2){
    alert("Divisivel por 4")
} else if(c3){
    alert("Divisivel por 5")
} else if(c4) {
    alert("Divisivel por 3\nDivisivel por 4")
} else if(c5){
    alert("Divisivel por 3\nDivisivel por 5")
}else if(c6){
    alert("Divisivel por 4\nDivisivel por 5")
}else if(c7){
    alert("Divisivel por 3\nDivisivel por 4\nDivisivel por 5")
}else{
    alert("Nao eh divisivel")
