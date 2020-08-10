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

export const getBraintreeClientToken = (userId, token) => {
    return fetch(`${API}/braintree/getToken/${userId}`, {
        method: "GET",
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

export const processPayment = (userId, token, paymentData) => {
    return fetch(`${API}/braintree/payment/${userId}`, {
        method: "POST",
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(paymentData)
    })
    .then(response => {
        return response.json();
    })
    .catch(err=> console.log(err));
};

export const createOrder = (userId, token, createOrderData) => {
    return fetch(`${API}/order/create/${userId}`, {
        method: "POST",
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({order: createOrderData})
    })
    .then(response => {
        return response.json();
    })
    .catch(err=> console.log(err));
};

export const listOrders = (userId, token) => {
    return fetch(`${API}/order/list/${userId}`, {
        method: "GET",
        headers:{
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
    .then(response => {
        return response.json();
    })
    .catch(err=> console.log(err));
};

export const getStatusValues = (userId, token) => {
    return fetch(`${API}/order/status-values/${userId}`, {
        method: "GET",
        headers:{
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
    .then(response => {
        return response.json();
    })
    .catch(err=> console.log(err));
};

export const updateOrderStatus = (userId, token, orderId, status) => {
    return fetch(`${API}/order/${orderId}/status/${userId}`, {
        method: "PUT",
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({status, orderId})
    })
    .then(response => {
        return response.json();
    })
    .catch(err=> console.log(err));
};

export const getBraintreeClientTokenGuest = (userId, token) => {
    return fetch(`${API}/braintree/getTokenGuest`, {
        method: "GET",
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

export const processPaymentGuest = (paymentData) => {
    return fetch(`${API}/braintree/payment`, {
        method: "POST",
        body: JSON.stringify(paymentData)
    })
    .then(response => {
        return response.json();
    })
    .catch(err=> console.log(err));
};

export const guestCreateOrder = (createOrderData) => {
    return fetch(`${API}/order/create/guest`, {
        method: "POST",
        body: JSON.stringify({order: createOrderData})
    })
    .then(response => {
        return response.json();
    })
    .catch(err=> console.log(err));
};
