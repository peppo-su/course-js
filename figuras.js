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


function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro)
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area)
}

function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("ladoa");
  const value1 = parseFloat(input1.value);

  const input2 = document.getElementById("ladob");
  const value2 = parseFloat(input2.value);

  const input3 = document.getElementById("base");
  const valueBase = parseFloat(input3.value);

  const input4 = document.getElementById("altura");
  const valueAltura = parseFloat(input4.value);


  const perimetro = perimetroTriangulo(value1, value2, valueBase);
  alert(perimetro)
}

function calcularAreaTriangulo() {
  const input3 = document.getElementById("base");
  const valueBase = parseFloat(input3.value);

  const input4 = document.getElementById("altura");
  const valueAltura = parseFloat(input4.value);


  const area = areaTriangulo(valueBase, valueAltura);
  alert(area)
}

// circulo
function calcularPerimetroCirculo() {
  const input = document.getElementById("radio");
  const value = parseFloat(input.value);

  const perimetro = perimetroCirculo(value);
  alert(perimetro)
}

function calcularAreaCirculo() {
  const input = document.getElementById("radio");
  const value = parseFloat(input.value);

  const area = areaCirculo(value);
  alert(area)
}

// triangulo isosceles
function listaNumerosUnicos2(array1) {

  const newArray = [];
  
  for (let element of array1) {
    console.log(element)
    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  }

  return newArray
}

function esIsosceles(arr) {
  const newArray = listaNumerosUnicos2(arr)

  const lenArray = newArray.length;
  // console.log(lenArray)
  if (lenArray == 2) {
    return true
    // console.log("true")
  }
  else {
    return false
    // console.log("false")
  }
}

function calcularAlturaTriangulo() {
  const input1 = document.getElementById("lado1");
  const input2 = document.getElementById("lado2");
  const input3 = document.getElementById("basetriangulo");

  // console.dir(input3);
  if (input1.value == '' || input2.value == '' || input3.value == '' ) {
    // alert("Ingrese un número");
    console.error("Ingrese un número");
  }
  else {
    // validar si es un triangulo isosceles
    const value1 = parseFloat(input1.value);
    const value2 = parseFloat(input2.value);
    const valueBase = parseFloat(input3.value);

    const lista = [value1, value2, valueBase]
    if (esIsosceles(lista)) {
      // calcular la altura
      lista.sort((a, b) => a - b);
      console.log(lista)

      let alturaTriangulo;
      if (lista[0] == lista[1]) {
        const baseNueva = lista[2]/2
        alturaTriangulo = Math.sqrt((lista[0] * lista[1]) - (baseNueva * baseNueva))
      }
      else if(lista[1] == lista[2]) {
        const baseNueva = lista[0]/2
        alturaTriangulo = Math.sqrt((lista[1] * lista[2]) - (baseNueva * baseNueva))
      }

      alert(alturaTriangulo)
    }
    else {
      console.error("No es un triángulo isósceles ");
    }
  }


}

function isVacio(letra) {
  if (letra === '') {
    return true
  }
  else {
    return false
  }
  
}


function listaNumerosUnicos(array1) {

  let array2 = []
  array1.forEach(element => {
    // console.log(element)
    if (array2.indexOf(element) == -1) {
      array2.push(element)
    }
  });

  return array2
}

function isIsosceles(array3) {

    const numeroElementos = listaNumerosUnicos(array3)

    if (numeroElementos.length == 2) {
        return true
    }
    return false
}

