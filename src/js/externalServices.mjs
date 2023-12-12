const baseURL = "http://server-nodejs.cit.byui.edu:3000/"

async function convertToJson(res) {
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw { name: 'servicesError', message: jsonResponse };
  }
}

export function getProductsByCategory(category) {
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

export async function loginRequest(user) {
  console.log("LOGIN REQUEST")
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };
  const response = await fetch(baseURL + "login", options).then(convertToJson);
  return response.accessToken;
}
// make a request to the server for the current orders
// requires: a valid token
// returns: a list of orders
export async function getOrders(token) {
  const options = {
    method: "GET",
    // the server will reject our request if we don't include the Authorization header with a valid token!
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(baseURL + "orders", options).then(convertToJson);
  return response;
}


