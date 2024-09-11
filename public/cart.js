const CartItems = document.querySelector(".cart-items");
const deleteCartHeader = document.querySelector(".cart_header_delete");
const cartTotal = document.querySelector(".cart_total_p");
const items = JSON.parse(localStorage.getItem("cart")) || [];

// Function to remove item from cart (localStorage) and from the DOM
function removeFromCart(id, cartItemElement) {
  // Get the cart from localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Filter the cart to remove the item with the matching id
  const updatedCart = cart.filter((item) => item.id !== id);

  // Update localStorage with the new cart array
  localStorage.setItem("cart", JSON.stringify(updatedCart));

  // Remove the item from the DOM
  cartItemElement.remove();

  // Update total price
  updateCartTotal();

  console.log(`Item with id ${id} has been removed`);
}

// Function to display cart items in the UI
function displayCartItems() {
  CartItems.innerHTML = ""; // Clear previous cart items

  items.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart_item";
    cartItem.innerHTML = `
      <span class="cart_Id lg:text-sm text-[12px] lg:w-auto w-[19%]">${item.quantity}</span>
      <span class="cart_title lg:text-sm text-[12px] lg:w-auto w-[25%]">${item.title}</span>
      <img src="${item.image}" alt="${item.title}" class="cart_img lg:w-[7%] w-[15%]">
      <div class="cart_price lg:text-sm text-[12px]">$${item.price}</div>
      <p class="cart_delete lg:text-sm text-[12px] cursor-pointer">Delete</p>
    `;

    CartItems.appendChild(cartItem);

    // Attach the event listener to the delete button
    const deleteCart = cartItem.querySelector(".cart_delete");
    deleteCart.addEventListener("click", () =>
      removeFromCart(item.id, cartItem)
    );
  });

  // Update total price after displaying items
  updateCartTotal();
}

// Function to update the total price
function updateCartTotal() {
  const items = JSON.parse(localStorage.getItem("cart")) || [];
  const totalPrice = items.reduce((acc, cur) => acc + cur.price, 0);
  cartTotal.textContent = `Total purchase: $${totalPrice}`;
}

// Event listener to clear all items from the cart when header delete button is clicked
deleteCartHeader.addEventListener("click", () => {
  localStorage.removeItem("cart");
  CartItems.innerHTML = ""; // Clear all items from the DOM
  updateCartTotal(); // Reset total price to zero
});

// Display items on page load
displayCartItems();