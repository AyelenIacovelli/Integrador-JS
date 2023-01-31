const form = document.getElementById("form");

// FUNCION QUE MANEJA EL EVENTO SUBMIT
const submitForm = (e) => {
    e.preventDefault();
    if (isValidForm()) {
        alert("El turno se ha cargado correctamente");
        form.reset();
    }
};

const init = () => {
    form.addEventListener("submit", submitForm);
};

init();
