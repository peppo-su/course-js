// console.log('Hello Everyone')
// código del cuadrado 
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}
function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();

// código del triangulo 
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 
console.groupEnd();

// Codigo del circulo
console.group("Círculo");

function diametroCirculo(radio) {
    return 2 * radio;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return Math.PI * diametro;
}

function areaCirculo(radio) {
    return (radio * radio) * Math.PI;
}

console.groupEnd();




