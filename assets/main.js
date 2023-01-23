// FUNCIONALIDAD CARRITO Y MENU HAMBURGUESA

// BOTON PARA ABRIR Y CERRAR CARRITO
const cartBtn = document.querySelector(".cart-label");
// BOTON PARA ABRIR Y CERRAR MENU
const menuBtn = document.querySelector(".menu-label");
// CARRITO
const cartMenu = document.querySelector(".cart")
// MENU HAMBURGUESA
const barsMenu = document.querySelector(".navbar-list");
// OVERLAY
const overlay = document.querySelector(".overlay");
// HEADER
const header = document.querySelector("header");

// LOCALSTORAGE
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// FUNCION DE GUARGADO EN LOCALSTORAGE
const saveLocalStorage = (cartList) => {
    localStorage.setItem(`cart`, JSON.stringify(cartList));
};

// FUNCION CLICK MENU HAMBURGUESA
const toggleMenu = () => {
    barsMenu.classList.toggle(`open-menu`);
    if (cartMenu.classList.contains(`open-cart`)) {
        cartMenu.classList.remove(`open-cart`);
        return;
    }
    overlay.classList.toggle(`show-overlay`);
    header.classList.toggle(`header-bg`);
};

// FUNCION CLICK CARRITO
const toggleCart = () => {
    cartMenu.classList.toggle(`open-cart`);
    if (barsMenu.classList.contains(`open-menu`)) {
        barsMenu.classList.remove(`open-menu`);
        return;
    }
    overlay.classList.toggle(`show-overlay`);
    header.classList.toggle(`header-bg`);
};

// FUNCION CERRAR CARRITO CUANDO SE CLICKEA NAVBAR
const closeOnClick = (e) => {
    if (!e.target.classList.contains(`navbar-link`)) {
        return;
    }
    barsMenu.classList.remove(`open-menu`);
    overlay.classList.remove(`show-overlay`);
    header.classList.remove(`header-bg`);
}

// FUNCION PARA CERRAR TODO AL SCROLLEAR
const closeOnScroll = () => {
    if (!barsMenu.classList.contains(`open-menu`) && !cartMenu.classList.contains(`open-cart`)) {
        return;
    }
    barsMenu.classList.remove(`open-menu`);
    cartMenu.classList.remove(`open-cart`);
    overlay.classList.remove(`show-overlay`);
    header.classList.remove(`header-bg`);
};

// FUNCION PARA CERRAR TODO AL CLICKEAR EN OVERLAY
const closeOnOverlayClick = (e) => {
    barsMenu.classList.remove(`open-menu`);
    cartMenu.classList.remove(`open-cart`);
    overlay.classList.remove(`show-overlay`);
    header.classList.remove(`header-bg`);
};


// CAMBIO COLOR HEADER
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle(`header-bg`, window.scrollY > 350);
});

// SLIDER EN NOTICIAS
// const slider = document.querySelector("#slider");
// let sliderSection = document.querySelectorAll(".card-info");
// let sliderSectionLast = sliderSection[sliderSection.length - 1];
// const chevronPost = document.querySelector("#chevron-post");
// const chevronPre = document.querySelector("#chevron-pre");

// PONGO ULTIMA IMG COMO PRIMERA
// slider.insertAdjacentElement("afterbegin", sliderSectionLast);

// FUNCION PARA MOVER SIGUIENTE
// const next = () => {
//     let sliderSectionFirst = document.querySelectorAll(".card-info")[0];
//     slider.style.marginLeft = "-200%";
//     slider.insertAdjacentElement("beforeend", sliderSectionFirst);
//     slider.style.marginLeft = "-100%";
// }

// FUNCION PARA MOVER ANTERIOR
// const prev = () => {
//     let sliderSection = document.querySelectorAll(".card-info");
//     let sliderSectionLast = sliderSection[sliderSection.length - 1];
//     slider.style.marginLeft = "0";
//     slider.insertAdjacentElement("afterbegin", sliderSectionLast);
//     slider.style.marginLeft = "-100%";
// }

// FUNCION PARA QUE SE MUEVA AUTOMATICAMENTE
// setInterval = (function () {
//     Next();
// }, 5000);

// MOSTRAR PRODUCTOS EN PAGINA

// CONTENEDOR DE PRODUCTOS
const products = document.querySelector(".products-container");
// BOTON VER MAS
const btnLoad = document.querySelector(".btn-load");
// CONTENEDOR DE CATEGORIAS
const categories = document.querySelector(".categories");
// HTML COLLECTION DE LAS CATEGORIAS
const categoriesList = document.querySelector(".category");

// FUNCION QUE MUESTRA EL PRODUCTO
const renderProduct = (product) => {
    const { id, name, bid, img } = product;
    return `
    <div class="product">
            <img src="${img}" alt="${name}">
            <div class="product-info">
                <h3>${name}</h3>
                <div class="product-bot">
                    <span>$${bid}</span>
                    <button class="btn-add" data-id="${id}" data-name="${name}" data-bid="${bid}" data-img="${img}">Comprar</button>
                    <button>+ y -</button>
                </div>
            </div>
    </div>
    `;
}

// FUNCION PARA MOSTRAR DE A PARTES LOS PRODUCTOS
const renderDividedProducts = (index = 0) => {
    products.innerHTML += productsController.dividedProducts[index].map(renderProduct).join("");
}

// FUNCION QUE MUESTRA LOS PRODUCTOS FILTRADOS POR CATEGORIA
const renderFilteredProducts = (category) => {
    const productsList = productsData.filter((product) => {
        return product.category === category;
    });
    products.innerHTML = productsList.map(renderProduct).join("");
};

// FUNCION QUE MUESTRA LOS PRODUCTOS FILTRADOS O SIN FILTRAR
const renderProducts = (index = 0, category = undefined) => {
    if (!category) {
        renderDividedProducts(index);
        return;
    }
    renderFilteredProducts(category);
};

// FUNCION QUE MUESTRA U OCULTA BTN VER MAS
const changeShowMoreBtnState = (category) => {
    if (!category) {
        btnLoad.classList.remove(`hidden`);
        return;
    }
    btnLoad.classList.add(`hidden`);
};

// FUNCION PARA CAMBIAR COLOR DE BTN DE CATEGORIA SELECCIONADA
const changeBtnActive = (selectedCategory) => {
    const categories = [...categoriesList];
    categories.forEach((categoryBtn) => {
        if (categoryBtn.dataset.category !== selectedCategory) {
            categoryBtn.classList.remove(`active`);
            return;
        };
        categoryBtn.classList.add(`active`);
    });
};

// FUNCION QUE EJECUTA VER MAS Y CATEGORIAS
const changeFilterState = (e) => {
    const selectedCategory = e.target.dataset.category;
    changeShowMoreBtnState(selectedCategory);
    changeBtnActiveState(selectedCategory);
};

// FUNCION PARA APLICAR FILTRO
const applyFilter = (e) => {
    if (!e.target.classList.contains(`category`)) {
        return;
    } else {
        changeFilterState(e);
    }
    if (!e.target.dataset.category) {
        products.innerHTML = "";
        renderProducts();
    } else {
        renderProducts(0, e.target.dataset.category);
        productsController.nextProductsIndex = 1;
    }
};

// FUNCION QUE INDICA SI LLEGUE AL ULTIMO INDEX
const isLastIndexOf = () => {
    return (
        productsController.nextProductsIndex === productsController.productsLimit
    );
};

// FUNCION PARA QUE FUNCIONE BTN VER MAS
const showMoreProducts = () => {
    renderProducts(productsController.nextProductsIndex);
    productsController.nextProductsIndex++;
    if (isLastIndexOf()) {
        btnLoad.classList.add(`hidden`);
    }
};



// FUNCION PUERTA DE ENTRADA
const init = () => {
    menuBtn.addEventListener(`click`, toggleMenu);
    cartBtn.addEventListener(`click`, toggleCart);
    barsMenu.addEventListener(`click`, closeOnClick);
    window.addEventListener(`scroll`, closeOnScroll);
    overlay.addEventListener(`click`, closeOnOverlayClick);
    renderProducts();
    categories.addEventListener(`click`, applyFilter);
    btnLoad.addEventListener(`click`, showMoreProducts);

    chevronPost.addEventListener(`click`, next);
    chevronPre.addEventListener(`click`, prev);

    renderProducts();
    categories.addEventListener("click", applyFilter);
    btnLoad.addEventListener("click", showMoreProducts);

};

init();