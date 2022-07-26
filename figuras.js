// console.log('Hello Everyone')
// código del cuadrado 
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log('Los lados del cuadrado miden: ' + ladoCuadrado + ' cm')

const perimetroCuadrado = 4 * ladoCuadrado;
console.log('El perímetro del cuadrado es: ' + perimetroCuadrado + ' cm')

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log('El área del cuadrado es: ' + areaCuadrado + ' cm^2')

console.groupEnd();

// código del triangulo 
console.group("Triángulos");
const ladoTriangulo1 = 5;
const ladoTriangulo2 = 5;
const baseTriangulo = 4;
console.log('Los lados del triángulo miden: ' + ladoTriangulo1 + 'cm, ' + ladoTriangulo2 + 'cm, ' + baseTriangulo + 'cm');

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de: " + alturaTriangulo + 'cm')

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log('El perímetro del triángulo es: ' + perimetroTriangulo + 'cm')

const areaTriangulo = (baseTriangulo * alturaTriangulo ) / 2;
console.log('El área del triángulo es: ' + areaTriangulo + 'cm^2')
// const perimetroCuadrado = 4 * ladoCuadrado;
// console.log('El perímetro del cuadrado es: ' + perimetroCuadrado + ' cm')

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log('El área del cuadrado es: ' + areaCuadrado + ' cm2')

console.groupEnd();

// Codigo del circulo
console.group("Círculo");

// radio
const radioCirculo = 4;
console.log('El radio del círculo es: ' + radioCirculo + 'cm')

// diametro
const diametroCirculo = radioCirculo * 2;
console.log('El diametro del círculo es: ' + diametroCirculo + 'cm')

// PI
// const PI = 3.1415;
const PI = Math.PI;
console.log('PI es: ' + PI)

// circunferencia
// const perimetroCirculo = 2 * PI * radioCirculo;
const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo es: " + perimetroCirculo + 'cm')

// area
const areaCirculo = (radioCirculo ** 2) * PI
console.log('El área del círculo es: ' + areaCirculo + 'cm^2')

console.groupEnd();





