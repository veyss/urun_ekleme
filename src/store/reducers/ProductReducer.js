import { FETCH_PRODUCTS_FULFILLED, FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_REJECTED } from "../actions/ProductAction"
import { ADD_PRODUCT_FULFILLED, ADD_PRODUCT_PENDING, ADD_PRODUCT_REJECTED } from "../actions/ProductAction"

const initialState = {
    fetching: false,
    products: [],
};
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_PENDING:
            return {
                ...state,
                fetching: true

            };
        case FETCH_PRODUCTS_FULFILLED:
            return {
                ...state,
                products: action.payload,
                fetching: false
            };
        case FETCH_PRODUCTS_REJECTED:
            return {
                ...state,
                products: action.payload,
                fetching: true
            };

        case ADD_PRODUCT_PENDING:
            return {
                ...state,
                fetching: true

            };
        case ADD_PRODUCT_FULFILLED:
            return {
                ...state,
                products: [...state.products, action.payload],
                fetching: false
            };
        case ADD_PRODUCT_REJECTED:
            return {
                ...state,
                products: [...state.products, action.payload],
                fetching: true
            };

            default:
                return state;
        }
    
    };