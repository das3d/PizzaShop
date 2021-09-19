import React from 'react'
import Counter from './CommonComponents/Counter'
import {useDispatch} from "react-redux";
import {cartActions} from "../redux/reducers/cartReducer";


const ProductCart = ({name, description,size, price, count, isDrink,image}) => {
    const dispatch = useDispatch();
    let deleteProduct = (name) => {
        console.log(name)
        dispatch(cartActions.deleteCartProduct(name))
    }
    return (
       
        <div class="menu__object">
            <div class="menu__object__row1">
                <div class="menu__image">
                    <img src={`http://localhost:5000/${image.small}`} alt="" />
                </div>
                <div class="menu__description">
                    <h3 class="menu__title">{!isDrink&&"Пицца "}
                        {name}</h3>
                        {!isDrink&&<div class="menu__text">
                        {description}
                    </div>}
                    <div class="menu__delete" onClick={()=>deleteProduct(name)}>
                        <img src="/img/delete.png" alt="" />
                    </div>
                </div>

            </div>
            <div class="menu__object__row2">
                <div class="menu__size">
                {!isDrink
                                ?<div><img src="/img/size_white.png" alt=""/> {size} см.</div>  
                                :<div><img src="/img/plastic-bottle.svg" alt=""/> {size} л.</div> }
                </div>

                <Counter isCart={true} count={count}/>
                <div class="menu__price">
                    <span>{price}</span> грн.
                </div>
            </div>
            <div class="smvolna">
                <img src="/img/volnasm.png" alt="" />
            </div>
        </div>
    )
}

export default ProductCart
