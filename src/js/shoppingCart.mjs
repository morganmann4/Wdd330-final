import { getLocalStorage, renderListWithTemplate } from "./utils.mjs";

export default function ShoppingCart() {
  const cartItems = getLocalStorage("so-cart");
  const outputEl = document.querySelector(".product-list");
  renderListWithTemplate(cartItemTemplate, outputEl, cartItems);
}

function cartItemTemplate(item) {
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
</li>`;

  return newItem;
}

export function cartEmptyTemplate() {
  // TODO: make this look better
  const noItems = `<li class="cart-card divider">

  <h2 class="card__name">Your cart is empty!</h2>
  <p class="cart-card__color">Shop today's deals now!</p>
  <p class="cart-card__quantity">qty: 0</p>
  <p class="cart-card__price">$---.--</p>
</li>`;
  return noItems;
}