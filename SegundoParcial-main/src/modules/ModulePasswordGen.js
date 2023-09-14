function generatePassword(userData) {
    // Obtener los primeros 2 caracteres de cada dato proporcionado por el usuario
    const { animal, name, color, symbols, birthDay, favoriteNumber } = userData;
    const passwordData = [animal, name, color, symbols, birthDay, favoriteNumber].map(str => str.slice(0, 2));
  
    // Combinar los datos y generar la contraseña
    const password = passwordData.join('');
    return password;
  }
  
  export { generatePassword };