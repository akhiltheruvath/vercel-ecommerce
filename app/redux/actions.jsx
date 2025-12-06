
export const SET_PRODUCTS = "SET_PRODUCTS";
export const setProducts = (products) => ({ type: SET_PRODUCTS, payload: products });

export const ADD_TO_CART = "ADD_TO_CART";
export const addToCart = (products) => ({ type: ADD_TO_CART, payload: products });


export const SET_CART = "SET_CART";
export const setCart = (cart) => ({ type: SET_CART, payload: cart });

export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const increaseQuantity = (id) => ({ type: INCREASE_QUANTITY, payload: id });

export const DECREMENT_QUANTITY = "DECREMENT_QUANTITY";
export const decrementQuantity = (id) => ({ type: DECREMENT_QUANTITY, payload: id });

export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const removeFromCart = (id) => ({type: REMOVE_FROM_CART,payload: id});
