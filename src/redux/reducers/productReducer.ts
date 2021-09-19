import {getFilterProducts, getPizzas} from "../../DAL/API";
import {TActions, TRootState} from "../store";
import {ThunkAction} from "redux-thunk";

const FILTER_BY_DRINK = 'FILTER_BY_DRINK';
const FILTER_BY_PIZZAS = 'FILTER_BY_PIZZAS';
const FILTER_BY_DISCOUNT = 'FILTER_BY_DISCOUNT';
const SET_PRODUCTS = 'SET_PRODUCTS';
const IS_LOADED_BEGIN = 'IS_LOADED_BEGIN';

 export type TProduct = {
    name: string,
    description: string,
    size: number,
    price: number,
    count: number,
    isDrink?: boolean,
    image: {
        large: string,
        small: string
    }
    isDiscount?: boolean
}
let initialState = {
    isLoaded: false,
    products: null as Array<TProduct>|null
}
type TinitialState = typeof initialState
const productReducer = (state = initialState, action: TProductActions): TinitialState => {
    switch (action.type) {
        case SET_PRODUCTS:{

            return {...state, products:  action.payload, isLoaded:true}
        }
        // case FILTER_BY_DRINK: {
        //
        //         return {
        //             ...state, products: state.products.filter((product) => {
        //                 return product.isDrink == true
        //             })
        //         }
        // }
        // case FILTER_BY_PIZZAS: {
        //     return { ...state, products: state.products.filter((product)=>{return product.isDrink !== true}) }
        // }
        // case FILTER_BY_DISCOUNT: {
        //
        //     return { ...state, products: state.products.filter((product)=>{return product.isDiscount === true}) }
        // }
        case IS_LOADED_BEGIN:{
            return {...state, isLoaded: false}
        }
        default: {
            return state
        }
    }
}
type TProductActions = TActions<typeof productActions>;
export const productActions = {
    isLoadedBegin: () => ({type:IS_LOADED_BEGIN} as const),
    // filterByDrink: () => ({ type: FILTER_BY_DRINK } as const),
    // filterByPizzas:  () => ({ type: FILTER_BY_PIZZAS} as const),
    // filterByDiscount:  () => ({ type: FILTER_BY_DISCOUNT} as const),
    setProducts:  (payload: TProduct[]) =>({type: SET_PRODUCTS, payload } as const)
}

export const getAllPizzas = ():ThunkAction<void, TRootState, unknown, TProductActions> => {
    return async dispatch => {
        let response = await getPizzas();
        dispatch(productActions.setProducts(response));
        console.log(response)

        
    }
}
export const getFilterProduct = (payload:string):ThunkAction<void, TRootState, unknown, TProductActions> => {
    return async dispatch => {
        let response = await getFilterProducts(payload)
        dispatch(productActions.setProducts(response))
    }}
export default productReducer;