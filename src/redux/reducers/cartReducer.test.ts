import cartReducer, {cartActions} from "./cartReducer";

let state = {
    isLoaded: true,
    cartProducts: []
}
let product = {
    name:"Спайси",
    description: 'Халапеньо, Бекон, Моцарелла, Пепперони, Помидоры.',
    size:36,
    price:19,
    count:1,
    isDrink: false,
    image: "/img/Pizza.png",
    isDiscount: false
}
it('length cartProducts should be incremented', ()=>{
    //1.Create action
    let action = cartActions.setCartProducts(product)
    //2.Create new state after call action
    let newState = cartReducer(state, action)
    //3.Expectation new state
    expect(newState.cartProducts.length).toBe(1)
})
it('new product should be correct', () =>{
    //1.Create action
    let action = cartActions.setCartProducts(product)
    //2.Create new state after call action
    let newState = cartReducer(state, action)
    //3.Expectation new state
    expect(newState.cartProducts[0]).toBe(product)
})
it('length cartProduct should be decremented', () =>{
    let state = {
        isLoaded: true,
        cartProducts: [
            {
                name:"Спайси",
                description: 'Халапеньо, Бекон, Моцарелла, Пепперони, Помидоры.',
                size:36,
                price:19,
                count:1,
                isDrink: false,
                image: "/img/Pizza.png",
                isDiscount: false
            }
        ]
    }
    //1.Create action
    let action = cartActions.deleteCartProduct("Спайси")
    //2.Create new state after call action
    let newState = cartReducer(state, action)
    //3.Expectation new state
    expect(newState.cartProducts.length).toBe(0)
})
