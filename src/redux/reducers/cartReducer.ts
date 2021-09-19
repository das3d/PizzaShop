import {TProduct} from "./productReducer";
import {TActions} from "../store";

const IS_LOADED_BEGIN = 'IS_LOADED_BEGIN'
const DELETE_CART_PRODUCT = 'DELETE_CART_PRODUCT'
const SET_CART_PRODUCTS = 'SET_CART_PRODUCTS'
let initialState = {
    isLoaded: true,
    cartProducts: [] as Array<TProduct>
}
type TInitialState = typeof initialState
const cartReducer = (state = initialState, action: TCartActions): TInitialState => {
    switch (action.type) {
        case SET_CART_PRODUCTS: {
            return {...state, cartProducts: [...state.cartProducts, action.payload]} //Adding an item to the cart
        }
        case DELETE_CART_PRODUCT: {
            return {
                ...state, cartProducts: [...state.cartProducts.filter(product => {
                    return product.name !== action.payload
                })]
            }
        }
        case IS_LOADED_BEGIN: {
            return {...state, isLoaded: true}
        }
        default: {
            return state
        }
    }
}
type TCartActions = TActions<typeof cartActions>;
//Action creator
export const cartActions = {
    deleteCartProduct: (payload: string) => ({type: DELETE_CART_PRODUCT, payload} as const),
    isLoadedBegin: () => ({type: IS_LOADED_BEGIN} as const),
    setCartProducts: (payload: TProduct) => ({type: SET_CART_PRODUCTS, payload} as const),

}

export default cartReducer;