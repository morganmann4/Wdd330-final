import productList from "./productList.mjs";
import { getParam, loadHeaderFooter, qs } from "./utils.mjs";

loadHeaderFooter();
const category = getParam("category");
// productList(".product-list", category);


// // show the list of products
// var products = new ExternalServices();
var listElement = qs(".product-list");
var titleElement = qs(".title");
var title = category.toString();
title = title[0].toUpperCase() + title.slice(1);
titleElement.textContent = title;
console.log("HERE")
productList(category, listElement);
