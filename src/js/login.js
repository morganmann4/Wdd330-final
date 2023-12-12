import { login } from "./auth.mjs";
import { getParam, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();
const redirect = getParam("redirect");

document.querySelector("#loginButton").addEventListener("click", (e) => {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  console.log("FIRST FUNCT")
  login({ email, password }, redirect);
  console.log("COMPLETE")
});