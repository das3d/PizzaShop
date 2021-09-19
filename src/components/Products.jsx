import React from 'react'
import Product from './Product';
import cn from 'classnames'
import {getAllPizzas, getFilterProduct} from '../redux/reducers/productReducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getDescriptionProduct } from '../selectors/productSelector';



const Products = ({ }) => {
    const [activeCategory, setActiveCategory] = React.useState(0)
    let descriptionProducts = useSelector(getDescriptionProduct)
    console.log(descriptionProducts)
    const dispatch = useDispatch()


    React.useEffect(() => {
       dispatch(getAllPizzas())
    }, []) //
    return (
        <div class="main">
            <div class="container">
                <h2 class="main__title">Наши Пиццы</h2>
                <div class="main__volna">
                    <img src="/img/volna.png" alt="" />
                </div>
                <div class="header__menu main__menu">
                    <ul class="menu">
                        <li className={cn({ "active": activeCategory === 0 })} onClick={() => { setActiveCategory(0); dispatch(getAllPizzas()) }}>Все товары</li>
                        <li className={cn({ "active": activeCategory === 1 })} onClick={() => { setActiveCategory(1); dispatch(getFilterProduct('pizza')) }}>Пицца</li>
                        <li className={cn({ "active": activeCategory === 2 })} onClick={() => { setActiveCategory(2); dispatch(getFilterProduct('drink')) }}>Напитки</li>
                        <li className={cn({ "active": activeCategory === 3 })} onClick={() => { setActiveCategory(3); dispatch(getFilterProduct('discount')) }}>Акции</li>
                    </ul>
                </div>
                {descriptionProducts.isLoaded &&
                    <div class="main__pizzablock">
                        {descriptionProducts.products.map(descriptionProduct =>
                            <Product {...descriptionProduct} />
                        )}

                    </div>}

            </div>
        </div>
    )
}


export default Products



