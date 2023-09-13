import { ModulePasswordGen } from "../../modules/Agregator.js";

const { generatePassword } = ModulePasswordGen;

function generateCustomPassword() {
  // Obtener los datos ingresados por el usuario
  const animal = document.getElementById('animal').value;
  const name = document.getElementById('name').value;
  const color = document.getElementById('color').value;
  const symbols = document.getElementById('symbols').value;
  const birthDay = document.getElementById('birthDay').value;
  const favoriteNumber = document.getElementById('favoriteNumber').value;

  // Crear el objeto con los datos del usuario
  const userData = {
    animal,
    name,
    color,
    symbols,
    birthDay,
    favoriteNumber
  };

  // Generar la contraseña personalizada
  const password = generatePassword(userData);

  // Mostrar la contraseña en un elemento de texto
  document.getElementById('generated-password').textContent = password;
}

document.addEventListener('DOMContentLoaded', () => {
  const generateButton = document.getElementById('generate-button');
  generateButton.addEventListener('click', generateCustomPassword);
});