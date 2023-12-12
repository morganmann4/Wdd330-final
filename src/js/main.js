import productList from "./productList.mjs";
import { loadHeaderFooter, loadNavbar} from "./utils.mjs";

loadHeaderFooter();

productList(".product-list", "tents");

loadNavbar();

// Get the modal
let modal = document.querySelector("#myModal");

// Get the button that opens the modal
let btn = document.querySelector("#myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

let sub = document.querySelector(".registerBtn")
const modalContent = document.querySelector(".modal-text");

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }
// thank you message onClick register button
btn.addEventListener("click", function (e) {
    modal.style.display = "block";
  });

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }
// thank you message onClick register button
span.addEventListener("click", function (e) {
    modal.style.display = "none";
  });

// thank you message onClick register button
window.addEventListener("click", function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
  });

// thank you message onClick register button
modal.addEventListener("click", function (e) {
    console.log("FIRE")
    if (e.target == sub) {
      modalContent.innerHTML = `<h4>Thank you for registering!</h4> <p>We wiil keep you updated on new deals.</p>`;
    }
  });
  