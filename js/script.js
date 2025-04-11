function esEmailValido(email) {
    // Expresión regular para validar el formato de un email
    const validacion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (validacion.test(email)) {
        return true;
    } else {
        //console.log(alert("Correo no válido"));
        return false;
    }
}

function esTelefonoValido(telefono){
    //Expresión regular para validar el formato de un telefono
    const validacion = /^(?:\+\d{2})?\d{3}(-| )?\d{3}(-| )?\d{3}/
    const longitud = 9

    if (validacion.test(telefono) && (validacion.lenght == longitud)) {
        return true;
    } else {
        //console.log(alert("Teléfono no válido"));
        return false;
    }
}

function contarPalabras(texto){
    const palabras = texto.trim().split(/\s+/);
    
    // Si el resultado es una cadena vacía o solo espacios, devolver 0
    return palabras[0] === "" ? 0 : palabras.length;
}