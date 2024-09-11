document.querySelector('#menu').addEventListener('click', () => {
    document.querySelector('li, ul').classList.toggle("hidden");
})

const AddtoCart = document.querySelectorAll(".add_to_cart");

AddtoCart.forEach(button => {
    button.addEventListener('click', () =>{
        const id = button.getAttribute("data-id");
        const title = button.getAttribute("data-title");
        const image = button.getAttribute("data-image");
        const price = button.getAttribute("data-price");

        const cartItem = {id, title, image, price};
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem("cart", JSON.stringify(cart));
    });
});