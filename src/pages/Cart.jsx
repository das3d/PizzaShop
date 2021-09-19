import React from 'react'
import { Link } from 'react-router-dom';
import BuyerForm from '../components/BuyerForm';
import ProductCart from '../components/ProductCart';
import { useSelector } from 'react-redux'
import { getAllPizzas } from '../redux/reducers/productReducer';
import { getDescriptionProduct } from '../selectors/productSelector'
import { useDispatch } from 'react-redux';
const Cart = () => {
    const dispatch = useDispatch();
    let descriptionProducts = useSelector(getDescriptionProduct);
    React.useEffect(() => {
        dispatch(getAllPizzas())
     }, [])
    return (
        <div class="cart">
            <div class="firstRow">
                <h2 class="cart__title">Корзина</h2>
                <Link to="/" class="cart__close">
                    <img src="/img/exit.png" alt="" />
                </Link>
            </div>

            <div class="cart__volna">
                <img src="/img/cart__volna.png" alt="" />
            </div>
            <div class="cart__main">
                    <div class="menu">
                        {descriptionProducts.isLoaded &&descriptionProducts.products.map(descriptionProduct =>
                            <ProductCart {...descriptionProduct} />
                        )}
                    </div>
            <BuyerForm/> 
            
        </div>
        </div>
    )
}

export default Cart;
