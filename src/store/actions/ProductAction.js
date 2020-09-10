import axios from "axios"
import { API_BASE } from "../../config/env"
export const FETCH_PRODUCTS_FULFILLED = "FETCH_PRODUCTS_FULFILLED";
export const FETCH_PRODUCTS_REJECTED = "FETCH_PRODUCTS_REJECTED";
export const FETCH_PRODUCTS_PENDING = "FETCH_PRODUCTS_PENDING";

export const ADD_PRODUCT_FULFILLED = "ADD_PRODUCT_FULFILLED"
export const ADD_PRODUCT_REJECTED = "ADD_PRODUCT_REJECTED"
export const ADD_PRODUCT_PENDING = "ADD_TODO_PENDING"


export function addProduct(newProduct) {
    return dispatch => {
        dispatch({
            type: "ADD_PRODUCT",
            payload: axios.post(`${API_BASE}/product`, newProduct).then(() => newProduct)
        })
    }
}
export function fetchProducts() {
    return dispatch => {
        dispatch({
            type: "FETCH_PRODUCTS",
            payload: axios.get(`${API_BASE}/product`)
                .then(result =>
                    result.data)
        })
    }
}