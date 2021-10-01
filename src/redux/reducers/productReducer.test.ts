import productReducer, {getAllPizzas, getFilterProduct, productActions, TProduct} from "./productReducer";
import { productAPI} from "../../DAL/API";


let state = {
    isLoaded: true,
    products: []
}
let product = {
    name:"Спайси",
    description: 'Халапеньо, Бекон, Моцарелла, Пепперони, Помидоры.',
    size:36,
    price:19,
    count:1,
    isDrink: false,
    image: {
        large:"/img/Pizza.png",
        small:"/img/Pizza.png"
    },
    isDiscount: false
}
test('Length all products should be incremented when server send data',()=>{
    //1.Create action
    let action = productActions.setProducts([product])
    //2.Create new state after call action
    let newState = productReducer(state, action)
    //3.Expectation new state
    expect(newState.products?.length).toBe(1)
})
//1.Create MOCK for API
jest.mock('../../DAL/API')
const productMock = productAPI as jest.Mocked<typeof productAPI>


//Tests for asynchronous actions - thunks
//2.Identification value was returned MOCK
productMock.getPizzas.mockReturnValue(Promise.resolve([product]))
test('Data about products should be received and saved', async ()=>{
    const thunk = getAllPizzas()
    //Create substitute for function dispatch and getState
    const dispatchMock = jest.fn()
    const getStateMock = jest.fn()

    await thunk(dispatchMock, getStateMock, {})
    //Check that the correct action was called
    expect(dispatchMock).toBeCalledTimes(1)
    expect(dispatchMock).toHaveBeenCalledWith(productActions.setProducts(undefined))
})
productMock.getFilterProducts.mockReturnValue(Promise.resolve([product]))
test('Data about sorted products should be received and saved ', async ()=>{
    const thunk = getFilterProduct('pizza')

    const dispatchMock = jest.fn()
    const getStateMock = jest.fn()

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(1)
    expect(dispatchMock).toHaveBeenCalledWith(productActions.setProducts(undefined))
})