const cartNumber = document.querySelector(".cart-number");
let number = 0;
const increaseNum = () => {
  number++;
};
const decreaseNum = () => {
  if (number > 0) {
    number--;
  }
};
document.querySelector("#menu").addEventListener("click", () => {
  document.querySelector("li, ul").classList.toggle("showmenu");
});

const AddtoCart = document.querySelectorAll(".add_to_cart");

// Assuming AddtoCart is a NodeList of buttons
AddtoCart.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.getAttribute("data-id");
    const title = button.getAttribute("data-title");
    const image = button.getAttribute("data-image");
    let price = button.getAttribute("data-price");

    // Remove the dollar sign from the price if it exists
    if (price.startsWith("$")) {
      price = price.slice(1); // Remove the dollar sign
    }

    // Ensure price is converted to a number before adding to cart
    const numericPrice = parseFloat(price);

    // Create the cart item object with a default quantity of 1
    let cartItem = { id, title, image, price: numericPrice, quantity: 1 };

    // Retrieve the cart from localStorage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const existingCartItem = cart.find((item) => item.id === cartItem.id);

    if (existingCartItem) {
      // If the product already exists in the cart, increment its quantity
      existingCartItem.quantity += 1;
      existingCartItem.price += numericPrice; // Optional: Update the total price for that product
    } else {
      // If it's a new product, add it to the cart
      cart.push(cartItem);
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Log the item data to the console (for debugging)
    console.log(id, title, image, numericPrice);

    // Assuming increaseNum() updates the cart number in the UI
    increaseNum();

    // Assuming cartNumber and number are defined elsewhere to show total items
    cartNumber.textContent = number;
  });
});
