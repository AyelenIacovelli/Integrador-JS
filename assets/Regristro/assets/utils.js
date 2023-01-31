// FUNCION SI EL INPUT ESTA VACIO
const isEmpty = (value) => {
    return !value.length;
};

// FUNCION PARA VALIDAR EL MAIL
const isValidEmail = (mail) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return re.test(mail);
};

// FUNCION PARA VALIDAR TELEFONO
const isValidPhone = (phone) => {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
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