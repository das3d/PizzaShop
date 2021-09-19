import react, {useEffect} from 'react';
import { Route } from 'react-router-dom';
import { Header, Products,Footer } from './components';
import './styles.scss'
import './components/cart/cart.scss'
import Main from './pages/Main'
import Cart from './pages/Cart'
import {useDispatch} from "react-redux";
import {productActions} from "./redux/reducers/productReducer";


function App() {

  return (
    
    <div>
        <Route path='/' component={Main} exact/>
        <Route path='/cart' component={Cart}/>

    </div>);
}

export default App;
