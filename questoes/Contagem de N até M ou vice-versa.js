do{
    var mm = parseInt(prompt("M: "))
    var nn = parseInt(prompt("N: "))
    if(mm!=nn){
    n = nn
    m = mm
    if(m > n){
    while(m!=(n-1)){
        alert(m+" ")
        m--
    }
}else{
    while(m!=(n+1)){
        alert(m+" ")
        m++
    }
}
alert("\n")
}
}while(mm!=nn)
