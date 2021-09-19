import { combineReducers, createStore, applyMiddleware, compose} from "redux";
import productReducer from './reducers/productReducer'
import thunk from 'redux-thunk';
let rootReducer = combineReducers({
    productReducer

})
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)) );
type TInferValue<T> = T extends {[key: string]: infer U}
    ?U
    :never
export type TActions<T extends {[key: string]:(...args:any[]) => any}> = ReturnType<TInferValue<T>>
type TRootReducer = typeof rootReducer;
export type TRootState = ReturnType<TRootReducer> | null
export default store


