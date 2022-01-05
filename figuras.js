
// codigo del cuadrado
function perimetroCuadrado(value){
    return value*4;
}

function areaCuadrado(value){
    return value*value;
}

function perimetroCirculo(value){
    const PI = Math.PI;
    return value*PI;
}


function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function CalcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const Area = areaCuadrado(value);
    alert(Area);
}

function calcularCircunferencia(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const circunferencia = perimetroCirculo(value);
    alert(circunferencia);
}