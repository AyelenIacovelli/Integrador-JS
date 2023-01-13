// ARRAY DE PRODUCTOS
const productsData = [
    {
        id: 1,
        name: "",
        bid: 1,
        category: "",
        img: "",
    },
    {
        id: 2,
        name: "",
        bid: 1,
        category: "",
        img: "",
    },
    {
        id: 3,
        name: "",
        bid: 1,
        category: "",
        img: "",
    },
    {
        id: 4,
        name: "",
        bid: 1,
        category: "",
        img: "",
    },
    {
        id: 5,
        name: "",
        bid: 1,
        category: "",
        img: "",
    },
    {
        id: 6,
        name: "",
        bid: 1,
        category: "",
        img: "",
    },
    {
        id: 7,
        name: "",
        bid: 1,
        category: "",
        img: "",
    },
    {
        id: 8,
        name: "",
        bid: 1,
        category: "",
        img: "",
    },
    {
        id: 9,
        name: "",
        bid: 1,
        category: "",
        img: "",
    },
    {
        id: 10,
        name: "",
        bid: 1,
        category: "",
        img: "",
    },
];

// FUNCION PARA CANT DE CARDS QUE QUIERO MOSTRAR
const splitProducts = (size) => {
    let dividedProducts = [];
    for (let i = 0; i < productsData.length; i += size) {
        dividedProducts.push(productsData.slice(i + size))
    }
    return dividedProducts;
};

// FUNCION QUE CREA OBJETO DEFINIDOR DE PRODUCTOS POR SLICE
const productsController = {
    dividedProducts: splitProducts(6),
    nextProductsIndex: 1,
    productsLimit: splitProducts(6).length,
};