import {getFilterProducts, getPizzas} from "../../DAL/API";
import {TActions, TRootState} from "../store";
import {ThunkAction} from "redux-thunk";

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