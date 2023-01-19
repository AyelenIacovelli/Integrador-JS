const form = document.getElementById("form");

// FUNCION QUE MANEJA EL EVENTO SUBMIT
const submitForm = (e) => {
    e.preventDefault();
    if (isValidForm) {
        console.log("Formulario cargado correctamente");
        form.submit();
    };
};
