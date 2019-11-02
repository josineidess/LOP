var vetorz = [], vetory = [], vetorx = []
var n = parseInt(prompt("num: "))
var p = n
var vezes = (n + 1) * (n + 1) * (n + 1)
var msg = ''
for (var e = 0, x = -1, y = 0, z = 0; e < vezes; e++) {
    if (z > n) {
        z = 0
    }
    vetorz[e] = z
    z++
    if (e % (n + 1) === 0) {
        y++
    }
    if (e % Math.pow((n + 1), 2) === 0) {
        y = 0
        x++
    }
    vetorx[e] = x
    vetory[e] = y
}
for (var i = 0; i < vezes; i++) {
    var f = (3 * vetorx[i]) + 4 * (vetory[i]) - 5 * (vetorz[i])
    msg += "x=" + vetorx[i] + ", y=" + vetory[i] + ", z=" + vetorz[i] + ", resultado=" + f + "\n"
}
alert(msg)
