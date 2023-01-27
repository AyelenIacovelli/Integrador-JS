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


// TAREAS EN EL RESTO DE LA PAGINA

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
const categoriesList = document.querySelectorAll(".category");

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
                    <button>+ y -</button>
                    <button class="btn-add" data-id="${id}" data-name="${name}" data-bid="${bid}" data-img="${img}">Comprar</button>
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
const changeBtnActiveState = (selectedCategory) => {
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


// FUNCIONES PARA EL CARRITO Y AGREGADO DE PRODUCTOS

// CONTENEDOR DE PRODUCTOS DEL CARRITO
const productsCart = document.querySelector(".cart-container");
// PRECIO TOTAL EN EL CARRITO
const total = document.querySelector(".total");
// BOTON DE COMPRAR
const buyBtn = document.querySelector(".btn-buy");
// BUBBLE DEL CARRITO
const cartBubble = document.querySelector(".cart-bubble");
// MODAL SUCCESS DE COMPRA
const successModal = document.querySelector(".add-modal");
// BOTON PARA BORRAR ARTICULOS DEL CARRITO}
const deleteBtn = document.querySelector(".btn-delete");

// FUNCION PARA MOSTRAR LOS PRODUCTOS PARA EL CARRITO
const renderCardProduct = (cartProduct) => {
    const { id, name, bid, img, quantity } = cartProduct
    return `
    <div class="cart-item">
    <img src="${img}" alt="${name}">
    <div class="item-info">
        <h3 class="item-title">${name}</h3>
        <p class="item-bid">Precio actual</p>
        <span class="item-price">$${bid}</span>
    </div>
    <div class="item-handler">
        <span class="quantity-handler down" data-id="${id}">-</span>
        <span class="item-quantity">${quantity}</span>
        <span class="quantity-handler up" data-id="${id}">+</span>
    </div>
</div>
    `
}

// FUNCION LOGICA QUE RENDERIZA EL PRODUCTO DENTRO DEL CARRITO
const renderCart = () => {
    if (!cart.length) {
        productsCart.innerHTML = `<p class="empty-msg">No hay productos en el carrito</p>`;
        return;
    }
    productsCart.innerHTML = cart.map(renderCardProduct).join("");
}

// FUNCION LOGICA PARA CALCULAR EL TOTAL DEL PRECIO DEL CARRITO
const getCartTotal = () => {
    return cart.reduce((acc, cur) => {
        return acc + Number(cur.bid) * cur.quantity
    }, 0)
};

// FUNCION PARA RENDERIZAR EL PRECIO TOTAL EN EL CARRITO
const showTotal = () => {
    total.innerHTML = `$${getCartTotal().toFixed(2)}`
}

// FUNCION PARA RENDERIZAR LA BURBUJA DEL CARRITO
const renderCartBubble = () => {
    cartBubble.textContent = cart.reduce((acc, cur) => {
        return acc + cur.quantity
    }, 0)
}

// FUNCION PARA DESABILITAR EL BOTON COMPRAR Y VACIAR DEL CARRITO DE MANERA VISUAL
const disableBtn = (btn) => {
    if (!cart.length) {
        btn.classList.add(`disabled`)
    } else {
        btn.classList.remove(`disabled`)
    }
}

// FUNCION QUE CHECKEA EL ESTADO COMPLETO DEL CARRITO
const checkCartState = () => {
    saveLocalStorage(cart);
    renderCart();
    showTotal();
    disableBtn(buyBtn);
    disableBtn(deleteBtn);
    renderCartBubble();
}

// FUNCION PARA AGREGAR PRODUCTO AL CARRITO
const addProduct = (e) => {
    if (!e.target.classList.contains(`btn-add`)) {
        return;
    }
    const { id, name, bid, img } = e.target.dataset;
    const product = productData(id, name, bid, img);
    if (isExistingCartProduct(product)) {
        addUnitToProduct(product);
        showSuccessModal("Se agregó una unidad del producto al carrito");
    } else {
        createCardProduct(product);
        showSuccessModal("El producto se ha agregado correctamente al carrito");
    }
    checkCartState();
};

// FUNCION QUE DEVUELVE EL PRODUCTO COMO OBJETO
const productData = (id, name, bid, img) => {
    return { id, name, bid, img };
};

// FUNCION QUE CHECKEA SI EL PRODUCTO EXISTE EN EL CARRITO
const isExistingCartProduct = (product) => {
    return cart.find((item) => {
        return item.id === product.id
    });
};

// FUNCION PARA AGREGAR UNA UNIDAD AL PRODUCTO EXISTENTE
const addUnitToProduct = (product) => {
    cart = cart.map((cartProduct) => {
        return cartProduct.id === product.id ? { ...cartProduct, quantity: cartProduct.quantity + 1 } : cartProduct;
    });
};

// FUNCION QUE RENDERIZA EL MODAL DE EXITO
const showSuccessModal = (msg) => {
    successModal.classList.add(`active-modal`)
    successModal.textContent = msg
    setTimeout(() => {
        successModal.classList.remove(`active-modal`)
    }, 1500)
};

// FUNCION QUE MANEJA LA LOGICA DEL BOTON MENOS DEL CARRITO
const handleMinusBtnEvent = (id) => {
    const existingCartProduct = cart.find((item) => {
        return item.id === id
    })
    if (existingCartProduct.quantity === 1) {
        if (window.confirm("¿Desea eliminar el producto del carrito?")) {
            removeProductFromCart(existingCartProduct);
        }
        return;
    }
    substractProductUnit(existingCartProduct);
};

// FUNCION QUE REMUEVE EL PRODUCTO DEL CARRITO
const removeProductFromCart = (existingProduct) => {
    cart = cart.filter((product) => product.id !== existingProduct.id);
    checkCartState();
};

// FUNCION PARA CREAR LA CARD DEL PRODUCTO EN EL CARRITO
const createCardProduct = (product) => {
    cart = [
        ...cart,
        {
            ...product,
            quantity: 1,
        },
    ]
};

// FUNCION PARA QUITAR UNA UNIDAD DE PRODUCTO DEL CARRITO
const substractProductUnit = (existingProduct) => {
    cart = cart.map((product) => {
        return product.id === existingProduct.id ? { ...product, quantity: Number(product.quantity) - 1 } : product;
    });
};

// FUNCION QUE MANEJA LA LOGICA DEL BOTON MAS DEL CARRITO
const handlePlusBtnEvent = (id) => {
    const existingCartProduct = cart.find((item) => {
        return item.id === id;
    });
    addUnitToProduct(existingCartProduct)
};

// FUNCION QUE MANEJA LA CANTIDAD
const handleQuantity = (e) => {
    if (e.target.classList.contains(`down`)) {
        handleMinusBtnEvent(e.target.dataset.id)
    } else if (e.target.classList.contains(`up`)) {
        handlePlusBtnEvent(e.target.dataset.id)
    }
    checkCartState();
}

// FUNCION QUE BORRA TODOS LOS ITEMS DEL CARRITO
const resetCartItems = () => {
    cart = [];
    checkCartState();
};

// FUNCION QUE PREGUNTA SI REALMENTE SE QUIERE HACER LA ACCION DEL BOTON
const completeCartAction = (confirmMsg, successMsg) => {
    if (!cart.length) return;
    if (window.confirm(confirmMsg)) {
        resetCartItems();
        alert(successMsg);
    }
};

// FUNCION PARA COMPLETAR LA COMPRA
const completeBuy = () => {
    completeCartAction("¿Desea completar su compra?", "Gracias por su compra")
};

// FUNCION PARA VACIAR CARRITO
const deleteCart = () => {
    completeCartAction("¿Desea borrar su carrito?", "Carrito vacío")
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
    document.addEventListener("DOMContentLoaded", renderCart);
    document.addEventListener("DOMContentLoaded", showTotal);
    document.addEventListener("DOMContentLoaded", renderCartBubble);
    disableBtn(buyBtn);
    disableBtn(deleteBtn);
    products.addEventListener(`click`, addProduct);
    productsCart.addEventListener(`click`, handleQuantity);
    buyBtn.addEventListener(`click`, completeBuy);
    deleteBtn.addEventListener(`click`, deleteCart);
    // chevronPost.addEventListener(`click`, next);
    // chevronPre.addEventListener(`click`, prev);



};

init();