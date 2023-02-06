const form = document.getElementById("form");
const emailInput = document.getElementById("mail");
const passInput = document.getElementById("pass");

// FUNCION SI EL INPUT ESTA VACIO
const isEmpty = (value) => {
    return !value.length;
};

// FUNCION PARA VALIDAR EL MAIL
const isValidEmail = (mail) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return re.test(mail);
};

// FUNCION PARA VALIDAD CONTRASEÑA
const isPassSecure = (pass) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    return re.test(pass);
};

// FUNCION QUE MUESTRA ERROR
const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.add(`error`);
    const error = formField.querySelector(`small`);
    error.textContent = message;
};

// FUNCION QUE QUITA EL ERROR
const clearError = (input) => {
    const formField = input.parentElement;
    formField.classList.remove(`error`);
    const error = formField.querySelector(`small`);
    error.textContent = "";
};

// FUNCION PARA VALIDAR MAIL
const checkMail = () => {
    let valid = false;
    const emailValue = emailInput.value.trim();

    if (isEmpty(emailValue)) {
        showError(emailInput, "El mail es obligatorio");
    } else {
        clearError(emailInput);
        valid = true;
    };
    return valid;
};

// FUNCION PARA VALIDAD CONTRASEÑA
const checkPass = () => {
    let valid = false;
    const pass = passInput.value.trim();

    if (isEmpty(pass)) {
        showError(passInput, "La contraseña es obligatoria");
    } else if (!isPassSecure(pass)) {
        showError(passInput, "La contraseña debe tener al menos ocho letras, una mayúscula, un número y un símbolo");
    } else {
        clearError(passInput);
        valid = true;
    }
    return valid;
};

// FUNCION PARA VALIDAR EL FORM
const isValidForm = () => {
    const isValidEmail = checkMail();
    const isValidPass = checkPass();

    return (isValidEmail && isValidPass);
};

// FUNCION QUE MANEJA EL EVENTO SUBMIT
const submitForm = (e) => {
    e.preventDefault();
    if (isValidForm()) {
        alert("Iniciando sesión");
        form.reset();
    }
};

const init = () => {
    form.addEventListener("submit", submitForm);
};

init();
