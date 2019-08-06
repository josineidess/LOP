var la = prompt("lado1: ");
var lb = prompt("lado2: ");
var lc = prompt("lado3: ");
//condições para ser triangulo
var c1 = la < (parseInt(lb) + parseInt(lc));
var c2 = lb < (parseInt(la) + parseInt(lc));
var c3 = lc < (parseInt(lb) + parseInt(la));
var triangulo = (c1) && (c2) && (c3);
if (triangulo) {
    //condição que checa se dois lados são iguais
    if (la === lb || la === lc || lb === lc) {
        if (la === lb && la === lc && lb === lc) {
           alert("Equilatero");
         //como todo equilátero é isosceles antes se testa se é equilátero
        } else {
           alert("Isosceles");
    }
    //checa se todos os lados são diferentes
    } else if (la !== lb && la !== lc && lb !== lc) {
        alert("Escaleno");
    }
} else {
    alert("Nao eh triangulo");
}
