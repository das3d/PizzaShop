import react from "react";
import cn from 'classnames';
import { CartButton } from "./CartButton";
import Counter from "./CommonComponents/Counter";

let Product = ({name, description,size, price, count, isDrink,image}) =>{

    return (
        <div className="pizza">
                        <div className={cn({
                            "pizza__image":!isDrink,
                            "drink__image": isDrink
                        })}>
                            <img src={`http://localhost:5000/${image.large}`} alt=""/>
                        </div>
                        <h3 className="pizza__title">{!isDrink&&"Пицца"}<br/>
                            {name}</h3>
                            {!isDrink&&<div className="pizza__text">
                           {description}
                        </div>}
                        <div className="pizza__row">
                            <div className="pizza__size">
                                {!isDrink
                                ?<div><img src="/img/pizza__size.png" alt=""/> {size} см.</div>  
                                :<div><img src="/img/bottle.png" alt=""/> {size} л.</div> }
                                
                            </div>
                            <div className="pizza__price">
                                <span>{price}</span> грн.
                            </div>
                        </div>

                        <div className="pizza__volna">
                            <img src="/img/volna.png" alt=""/>
                        </div>
                        <Counter count={count}/>
                        <CartButton count={count} name={name} description={description} size={size} price={price} isDrink={isDrink} image={image}/>
                        {!isDrink&&<div className="pizza__buy button">
                            <img src="/img/fastbuy.png" alt=""/>
                            купить в один клик
                        </div>}
                        

                    </div>
    );
}

export default Product;