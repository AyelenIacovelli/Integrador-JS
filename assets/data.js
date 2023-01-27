// ARRAY DE PRODUCTOS
const productsData = [
    {
        id: 1,
        name: "Alfajor chocolate negro DDL",
        bid: 250,
        category: "alfajor",
        img: "../imagenes/alfajores/alfajor negro.jpg",
    },
    {
        id: 2,
        name: "Alfajor chocolate blanco DDL",
        bid: 250,
        category: "alfajor",
        img: "../imagenes/alfajores/alfajor blanco.jpg",
    },
    {
        id: 3,
        name: "Alfajor chocolate negro fruta",
        bid: 230,
        category: "alfajor",
        img: "../imagenes/alfajores/alfajor fruta.jpg",
    },
    {
        id: 4,
        name: "Alfajor chocolate blanco fruta",
        bid: 230,
        category: "alfajor",
        img: "../imagenes/alfajores/alfajor blanco fruta.jpg",
    },
    {
        id: 5,
        name: "Bombón chocolate blanco DDL",
        bid: 80,
        category: "bombon",
        img: "../imagenes/bombones/blanco ddl.jpg",
    },
    {
        id: 6,
        name: "Bombón chocolate con leche DDL",
        bid: 80,
        category: "bombon",
        img: "../imagenes/bombones/leche ddl.jpg",
    },
    {
        id: 7,
        name: "Bombón de café",
        bid: 80,
        category: "bombon",
        img: "../imagenes/bombones/cafe.jpg",
    },
    {
        id: 8,
        name: "Bombón de menta",
        bid: 80,
        category: "bombon",
        img: "../imagenes/bombones/menta.jpg",
    },
    {
        id: 9,
        name: "Bombón de lemoncello",
        bid: 80,
        category: "bombon",
        img: "../imagenes/bombones/lemoncello.jpg",
    },
    {
        id: 10,
        name: "Chocolate blanco frutos del bosque",
        bid: 180,
        category: "chocolate",
        img: "../imagenes/chocolate/choco blanco frutos del bosque.jpg",
    },
    {
        id: 11,
        name: "Chocolate blanco con nuez",
        bid: 180,
        category: "chocolate",
        img: "../imagenes/chocolate/choco blanco nuez.jpg",
    },
    {
        id: 12,
        name: "Chocolate blanco rama",
        bid: 200,
        category: "chocolate",
        img: "../imagenes/chocolate/choco blanco rama.jpg",
    },
    {
        id: 13,
        name: "Chocolate blanco",
        bid: 180,
        category: "chocolate",
        img: "../imagenes/chocolate/choco blanco.jpg",
    },
    {
        id: 14,
        name: "Chocolate cacao 70%",
        bid: 180,
        category: "chocolate",
        img: "../imagenes/chocolate/choco cacao 70%.jpg",
    },
    {
        id: 15,
        name: "Chocolate con leche rama",
        bid: 200,
        category: "chocolate",
        img: "../imagenes/chocolate/choco leche rama.jpg",
    },
    {
        id: 16,
        name: "Chocolate con leche",
        bid: 180,
        category: "chocolate",
        img: "../imagenes/chocolate/choco leche.jpg",
    },
    {
        id: 17,
        name: "Chocolate marroc",
        bid: 180,
        category: "chocolate",
        img: "../imagenes/chocolate/choco marroc.jpg",
    },
    {
        id: 18,
        name: "Chocolate menta",
        bid: 180,
        category: "chocolate",
        img: "../imagenes/chocolate/choco menta.jpg",
    },
    {
        id: 19,
        name: "Chocolate semi amargo nuez",
        bid: 180,
        category: "chocolate",
        img: "../imagenes/chocolate/choco semi nuez.jpg",
    },
    {
        id: 20,
        name: "Chocolate semi amargo rama",
        bid: 200,
        category: "chocolate",
        img: "../imagenes/chocolate/choco semi rama.jpg",
    },
    {
        id: 21,
        name: "Chocolate vegano",
        bid: 180,
        category: "chocolate",
        img: "../imagenes/chocolate/choco vegano.jpg",
    },
    {
        id: 22,
        name: "Paleta helada almendras",
        bid: 300,
        category: "helado",
        img: "../imagenes/paletas/almendras.webp",
    },
    {
        id: 23,
        name: "Paleta chocolate blanco Nutella",
        bid: 300,
        category: "helado",
        img: "../imagenes/paletas/choco blanco y nutella.webp",
    },
    {
        id: 24,
        name: "Paleta chocolate blanco Pistacho",
        bid: 300,
        category: "helado",
        img: "../imagenes/paletas/choco blanco y pistacho.webp",
    },
    {
        id: 25,
        name: "Paleta DDL",
        bid: 300,
        category: "helado",
        img: "../imagenes/paletas/dulce de leche.webp",
    },
    {
        id: 26,
        name: "Paleta frambuesa",
        bid: 300,
        category: "helado",
        img: "../imagenes/paletas/frambuesa.webp",
    },
    {
        id: 27,
        name: "Paleta sólo fruta",
        bid: 300,
        category: "helado",
        img: "../imagenes/paletas/mango ban frut.webp",
    },
    {
        id: 28,
        name: "Auto ositos chocolate DDL",
        bid: 2200,
        category: "regaleria",
        img: "../imagenes/Regalería/auto ositos.webp",
    },
    {
        id: 29,
        name: "Caja animalitos chocolate DDL",
        bid: 2800,
        category: "regaleria",
        img: "../imagenes/Regalería/caja animalitos.webp",
    },
    {
        id: 30,
        name: "Lata bombones surtidos",
        bid: 2500,
        category: "regaleria",
        img: "../imagenes/Regalería/lata bombones.webp",
    },
    {
        id: 31,
        name: "Lata ositos chocolate DDL",
        bid: 3000,
        category: "regaleria",
        img: "../imagenes/Regalería/lata ositos.webp",
    },
    {
        id: 32,
        name: "Brownie",
        bid: 600,
        category: "torta",
        img: "../imagenes/pasteleria/brownie.webp",
    },
    {
        id: 33,
        name: "Cheesecake",
        bid: 600,
        category: "torta",
        img: "../imagenes/pasteleria/chesse cake.webp",
    },
    {
        id: 34,
        name: "Chiffon de limón",
        bid: 600,
        category: "torta",
        img: "../imagenes/pasteleria/chiffon de limon.webp",
    },
    {
        id: 35,
        name: "Crumble manzana y almendra",
        bid: 600,
        category: "torta",
        img: "../imagenes/pasteleria/crumble manzana y almendra.webp",
    },
    {
        id: 36,
        name: "Frutilla y crema de vainillas",
        bid: 600,
        category: "torta",
        img: "../imagenes/pasteleria/frutilla y crema de vainilla.webp",
    },
    {
        id: 37,
        name: "Lima y vainilla",
        bid: 600,
        category: "torta",
        img: "../imagenes/pasteleria/lima y vainilla.webp",
    },
    {
        id: 38,
        name: "Mousse DDL",
        bid: 600,
        category: "torta",
        img: "../imagenes/pasteleria/mousse ddl.webp",
    },
    {
        id: 39,
        name: "Ricota",
        bid: 600,
        category: "torta",
        img: "../imagenes/pasteleria/ricota.webp",
    },
    {
        id: 40,
        name: "Tiramisú al chocolate",
        bid: 600,
        category: "torta",
        img: "../imagenes/pasteleria/tiramisu al choco.webp",
    },
];

// FUNCION PARA CANT DE CARDS QUE QUIERO MOSTRAR
const splitProducts = (size) => {
    let dividedProducts = [];
    for (let i = 0; i < productsData.length; i += size) {
        dividedProducts.push(productsData.slice(i, i + size));
    }
    return dividedProducts;
};

// FUNCION QUE CREA OBJETO DEFINIDOR DE PRODUCTOS POR SLICE
const productsController = {
    dividedProducts: splitProducts(8),
    nextProductsIndex: 1,
    productsLimit: splitProducts(8).length,
};