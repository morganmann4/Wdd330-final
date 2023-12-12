import { getLocalStorage } from "./utils.mjs";
import { loadHeaderFooter } from "./utils.mjs";
import shoppingCart from "./shoppingCart.mjs";
import { setLocalStorage } from "./utils.mjs";
import { updateCartTotal } from "./utils.mjs";

loadHeaderFooter();
shoppingCart();

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");

  if (cartItems == null || cartItems <= 0) {
    // if cart empty display emptyness
    const htmlItems = cartEmptyTemplate();
    document.querySelector(".product-list").innerHTML = htmlItems;
  }else{
    const htmlItems = cartItems.map((item, index) => cartItemTemplate(item, index));
    document.querySelector(".product-list").innerHTML = htmlItems.join("");
    updateCartTotal(cartItems);
  }

}


function cartItemTemplate(item, index) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
  <a href="#" class="delete-icon" data-index="${index}">Delete</a>

</li>`;

  return newItem;
}

function cartEmptyTemplate() {
  // TODO: make this look better
  const noItems = `<li class="cart-card divider">
  <h2 class="card__name">Your cart is empty!</h2>
  <p class="cart-card__color">Shop today's deals now!</p>
  <p class="cart-card__quantity">qty: 0</p>
</li>`;
  return noItems;
}

document.querySelector(".product-list").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-icon")) {
    const index = e.target.getAttribute("data-index");
    const cartItems = getLocalStorage("so-cart");
    if (index >= 0 && index < cartItems.length) {
      const deletedItemPrice = cartItems[index].FinalPrice;
      cartItems.splice(index, 1);
      setLocalStorage("so-cart", cartItems);
      renderCartContents();
      updateCartTotal(cartItems);
    }
  }
});



renderCartContents();

