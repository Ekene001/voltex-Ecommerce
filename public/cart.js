const CartItems = document.querySelector(".cart-items", ".cart-item");

function displayCartItems() {
     const items = JSON.parse(localStorage.getItem("cart"));
     items.forEach(item => {
        const cartItem = document.createElement("div")
        cartItem.className = "cart_item";
        cartItem.innerHTML = `
            <span class="cart_Id lg:text-sm text-[12px] lg:w-auto w-[19%]">${item.id}</span>
            <span class="cart_title lg:text-sm text-[12px] lg:w-auto w-[25%]">${item.title}</span>
            <img src="${item.image}" alt="${item.title}" class="cart_img lg:w-[7%] w-[15%]">
            <div class="cart_price lg:text-sm text-[12px]">${item.price}</div>
            <p class="cart_delete lg:text-sm text-[12px]">Delete</p>
        `;
        CartItems.appendChild(cartItem);
     });
}

displayCartItems();