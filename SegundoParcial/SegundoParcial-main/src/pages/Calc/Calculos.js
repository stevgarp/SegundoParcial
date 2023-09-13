import { ModuleCalculo } from "../../modules/Agregator.js";

const { sumar, restar, multiplicar, dividir } = ModuleCalculo;

function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacion = document.getElementById('operacion').value;
    let resultado;
  
    switch (operacion) {
      case 'sumar':
        resultado = sumar(num1, num2);
        break;
      case 'restar':
        resultado = restar(num1, num2);
        break;
      case 'multiplicar':
        resultado = multiplicar(num1, num2);
        break;
      case 'dividir':
        resultado = dividir(num1, num2);
        break;
      default:
        resultado = 'Operación no válida';
    }
  
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
  }
  
  // Asigna la función calcular() al botón
  document.querySelector('button').addEventListener('click', calcular);
