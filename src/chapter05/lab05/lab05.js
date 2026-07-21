console.log("Lab 05")

const products = [
    {
        name: "Quan ao",
        price: "100k",
        inStock: true
    },
    {
        name: "Day dep",
        price: "20k",
        inStock: true
    },
    {
        name: "Mu non",
        price: "103k",
        inStock: false
    },
    {
        name: "Ba lo",
        price: "104320k",
        inStock: true
    },
    {
        name: "Sung",
        price: "100k",
        inStock: false
    }
]

console.log(products[0])
console.log("--------")
for (let key in products) {
    products[2].price = "2340";
    console.log("gia san pham thu 2: ", products[1].price)
}

products.unshift(
    {
        name: "Tui bong",
        price: "234k",
        inStock: false
    }
)
console.log("--------")
console.log(products)
console.log("--------")
 
//xoa san pham cuoi cung
products.pop();
console.log(products)

