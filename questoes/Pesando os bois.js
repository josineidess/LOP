var n = parseInt(prompt("quantidade:"))
var pesos = []
var leve, pesado, numerop, numerol;
var total = 0
for (var e = 0; e < n; e++) {
    numero = parseInt(prompt("numero: "))
    pesos[e] = parseInt(prompt("peso:"))
    total += pesos[e]
    if (e === 0) {
        leve = pesos[e]
        pesado = pesos[e]
        numerol = numero
        numerop = numero
    } else {
        if (pesos[e] > pesado) {
            pesado = pesos[e]
            numerop = numero
        } else {
            if (pesos[e] < leve) {
                leve = pesos[e]
                numerol = numero
            }
        }
    }

}
var media = total / n
alert("Media: " + media + "\nMais pesado: " + numerop + "\nMais leve: " + numerol)
