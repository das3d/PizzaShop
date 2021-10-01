import React from 'react'

const Counter = React.memo(({ isCart, count, plusCount, minusCount }) => {
    const [quantity, setquantity] = React.useState(count)
    return (
        <div>
        {
            isCart?
            <div className = "menu__counter">

            < div onClick = {()=> { setquantity(quantity + 1) }} className = "menu__plus" >
    <img src="/img/plus.png" alt="" />
            </div >
            <div onClick={()=>{if(quantity>0){setquantity(quantity-1)}}} className="menu__minus">
                <img src="/img/minus.png" alt=""/>
            </div>
           <div className="menu__count"><span>{quantity}</span> шт.</div>
           
            
        </div >
    :<div className = "pizza__counter">

    < div onClick = {()=> { setquantity(quantity + 1); plusCount() }} className = "pizza__plus" >
<img src="/img/plus.png" alt="" />
    </div >
    <div onClick={()=>{if(quantity>0){setquantity(quantity-1); minusCount()}}} className="pizza__minus">
        <img src="/img/minus.png" alt=""/>
    </div>
   <div className="pizza__count"><span>{quantity}</span> шт.</div>
   
    
</div >
        }
    </div>
    )
})

export default Counter
