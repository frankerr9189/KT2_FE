import {API} from "../config";

export const createCategory = (userId, token, category) => {
    return fetch(`${API}/category/create/${userId}`,{
         method: 'POST',
         headers:{
             Accept: 'application/json',
             'Content-Type': 'application/json',
             Authorization: `Bearer ${token}`
         },
         body: JSON.stringify(category)
     })
     .then(response=> {
         return response.json();
     })
     .catch(err=> {
         console.log(err);
     });
 };

 export const createProduct = (userId, token, product) => {
    return fetch(`${API}/product/create/${userId}`,{
         method: 'POST',
         headers:{
             Accept: 'application/json',
             Authorization: `Bearer ${token}`
         },
         body: product
     })
     .then(response=> {
         return response.json();
     })
     .catch(err=> {
         console.log(err);
     });
 };

 export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err=> console.log(err));
};

export const read = productId => {
    return fetch(`${API}/product/${productId}`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err=> console.log(err));
};


/**
  * perform crud on products
  * get all products
  * get a single product
  * update single product
  * delete single product
  */
//undefined returns all, a number will restrict it to that limit
export const getProducts = () => {
    return fetch(`${API}/products?limit=undefined`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err=> console.log(err));
};

export const deleteProduct = (productId, userId, token) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method: "DELETE",
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
    .then(response => {
        return response.json();
    })
    .catch(err=> console.log(err));
};

export const getProduct = (productId) => {
    return fetch(`${API}/product/${productId}`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err=> console.log(err));
};

export const updateProduct = (productId, userId, token, product) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method: "PUT",
        headers:{
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product
    })
    .then(response => {
        return response.json();
    })
    .catch(err=> console.log(err));
};


