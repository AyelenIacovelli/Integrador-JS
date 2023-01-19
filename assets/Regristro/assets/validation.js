const nameInput = document.getElementById("username");
const surnameInput = document.getElementById("surname");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("mail");
const passInput = document.getElementById("pass");

// FUNCION PARA VALIDAR NOMBRE Y APELLIDO
const checkTextInput = (input) => {
    let valid = false;
    const content = input.value.trim();

    if (isEmpty(content)) {
        showError(input, "El nombre es obligatorio");
    } else {
        clearError(input);
        valid = true;
    };
    return valid;
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

const checkPhone = () => {
    let valid = false;
    const phoneValue = phoneInput.value.trim();

    if (!isPhoneValid(phoneValue)) {
        showError(phoneInput, "El número ingresado no es válido");
    } else {
        clearError(phoneInput);
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
        showError(passInput, "La contraseña es insegura. Debe contener 8 caracteres, minúscula, mayúscula y símbolo");
    } else {
        clearError(passInput);
        valid = true;
    }
    return valid;
};

// FUNCION PARA VALIDAR EL FORM
const isValidForm = () => {
    const isValidName = checkTextInput(nameInput);
    const isValidSurname = checkTextInput(surnameInput);
    const isValidEmail = checkMail();
    const isValidPhone = checkPhone();
    const isValidPass = checkPass();

    return (isValidName && isValidSurname && isValidEmail && isValidPhone && isValidPass);
};