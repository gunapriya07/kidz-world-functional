const cartValue = document.getElementById("cart-value");
const cartBtn = document.getElementById("cart")

const addBtn = document.getElementsByClassName("button");

let products = [
    {
        name: "This was our pact",
        quantity: 0,
        dollars: 7,
        cents: 49,
    },
    {
        name: "The famous five",
        quantity: 0,
        dollars: 4,
        cents: 59,
    },

    {
        name: "Matilda",
        quantity: 0,
        dollars: 6,
        cents: 80,
    },
    {
        name: "Harry Potter",
        quantity: 0,
        dollars: 10,
        cents: 0,
    },
    {
        name: "Four Young Readers",
        quantity: 0,
        dollars: 7,
        cents: 29,
    },
    {
        name: "Wimpy Kid-DIY",
        quantity: 0,
        dollars: 4,
        cents: 99,
    },
    {
        name: "Dar Board",
        quantity: 0,
        dollars: 17,
        cents: 49,
    },
    {
        name: "Connect4",
        quantity: 0,
        dollars: 19,
        cents: 99,
    },
    {
        name: "Jenga",
        quantity: 0,
        dollars: 20,
        cents: 99,
    },
    {
        name: "Monopoly",
        quantity: 0,
        dollars: 19,
        cents: 49,
    },
    {
        name: "Bookmarks",
        quantity: 0,
        dollars: 12,
        cents: 49,
    },
    {
        name: "Birthday card",
        quantity: 0,
        dollars: 19,
        cents: 99,
    },
    {
        name: "Stuffed toys",
        quantity: 0,
        dollars: 15,
        cents: 99,
    },
    {
        name: "Dream catcher drawing",
        quantity: 0,
        dollars: 15,
        cents: 99,
    },
];

let finalDollar = 0;
let finalCents = 0;
let cartCount=0;

for (let i = 0; i < addBtn.length; i++) {
    addBtn[i].onclick = () => {
        products[i].quantity++;
        // updateCart();
        cartCount++;
        cartValue.innerText = cartCount;
    };
}
function updatePrice() {
    let totalBill = 0;
    for (let i = 0; i < products.length; i++) {
        if (products[i].quantity > 0) {
            totalBill += products[i].quantity * products[i].dollars * (100 + products[i].cents);
        }
    }
    finalDollar = Math.floor(totalBill / 100)
    finalCents = totalBill % 100;
}
cartBtn.onclick = () => {
    updatePrice();

       let message ="Order details "

    for (let i = 0; i < products.length; i++) {
        if (products[i].quantity != 0) {
            console.log(`item name ${products[i].name}-Quantity:${products[i].quantity}.`
            );
               message+=`Item name ${products[i].name}-Quantity: ${products[i].quantity}.`;
        }
    }
       message+=`The total amount is ${finalDollar}$ and ${finalCents} cents`;
    console.log(`The total amount is ${finalDollar}$ and ${finalCents} cents`);
       window.open(`https://wa.me/000000000?text=${message}`);
};