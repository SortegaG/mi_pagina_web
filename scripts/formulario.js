let nombre = document.getElementById('nombre');
let fecha = document.getElementById('date');
let genero = document.getElementById('genero');
let email = document.getElementById('email');
let texto = document.getElementById('mensaje');
let terminos = document.getElementById('terminos');
let form = document.getElementById('my-form');

function validarNombre() {
    if (nombre.value === "") {
        alert("Rellene el campo nombre");
        return false;        
    } 
    
    if (nombre.value.length < 5 || nombre.value.length > 15) {
        alert("El nombre es incorrecto");
        return false;
    }

    return true;
}

function validarFecha() {
    if (fecha.value === '') {
        alert('Rellene el campo fecha')
        return false;
    }

    return true;
}

function validarGenero() {
    if (genero.value === '') {
        alert('Rellene el campo género')
        return false;
    }

    return true;
}

function validarEmail() {
    const isValid = email.value != '' && (email.value.endsWith('.com') || email.value.endsWith('.es')) && email.value.includes('@') && !email.value.includes(' ');

    if (!isValid) {
        alert('email incorrecto')
    } 

    return isValid;

    }

function validarMensaje() {
    if (mensaje.value === '') {
        alert('Campo de mensaje vacio');
        return false
    }

    return true;
}

function validarTerminos() {
    if (terminos.checked === false) {
        alert('Acepte terminos y condiciones');
        return false
    }

    return true;
}


    function validarForm() {
        return validarNombre() && validarFecha() && validarEmail() && validarEmail() && validarMensaje() && validarTerminos();
    }


form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validarForm()) {
        alert('Formulario correcto')
    }
})

