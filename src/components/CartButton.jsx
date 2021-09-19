import React from 'react'
import {useDispatch} from "react-redux";
import {cartActions} from '../redux/reducers/cartReducer';

export const CartButton = (props) => {
    const dispatch = useDispatch()
    let setProduct = (description) =>{
        dispatch(cartActions.setCartProducts(description))
        console.log(description)
    }
    return (
        <div className="pizza__cart button" onClick={()=>setProduct(props)}>
            <img src="/img/pizza__cart.png" alt="" />
            в корзину
        </div>
    )
}
