let products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }
];

console.log("All Products:");

products.forEach(function(product) {
    console.log(product.name + " - $" + product.price);
});

let affordableProducts = products.filter(function(product) {
    return product.price < 50;
});

console.log("Products Under $50:");

affordableProducts.forEach(function(product) {
    console.log(product.name + " - $" + product.price);
});

let productNames = products.map(function(product) {
    return product.name.toUpperCase();
});

console.log("Product Names in Uppercase:");

productNames.forEach(function(name) {
    console.log(name);
});