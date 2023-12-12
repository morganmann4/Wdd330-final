const baseURL = "http://server-nodejs.cit.byui.edu:3000/"

async function convertToJson(res) {
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw { name: 'servicesError', message: jsonResponse };
  }
}

export function getProductsByCategory(category = "tents") {
  return fetch(`../json/${category}.json`)
    .then(convertToJson)
    .then((data) => data);
}

// export async function findProductById(id) {
//   const products = await getProductsByCategory();
//   return products.find((item) => item.Id === id);
// }
export async function findProductById(id) {
  const response = await fetch(baseURL + `product/${id}`);
  const data = await convertToJson(response);
  return data.Result;
}

export async function checkout(payload) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  return await fetch(baseURL + "checkout/", options).then(convertToJson);
}

export async function getData(category) {
  console.log("CATEGORY")
  console.log(category)
  console.log(baseURL)
  const response = await fetch(baseURL + `products/search/${category}`);
  console.log("res")
  console.log(response)
  const data = await convertToJson(response);
  console.log("data")
  console.log(data)
  return data.Result;
}



