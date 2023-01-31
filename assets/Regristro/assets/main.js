const form = document.getElementById("form");

// FUNCION QUE MANEJA EL EVENTO SUBMIT
const submitForm = (e) => {
    e.preventDefault();
    if (isValidForm()) {
        alert("Registro realizado");
        form.reset();
    }
};

const init = () => {
    form.addEventListener("submit", submitForm);
};

init();
