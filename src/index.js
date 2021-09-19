import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './redux/store'
import {Provider} from 'react-redux';


ReactDOM.render(
  
    
    <Router>
    <Provider store={store}>
      
    <App store={store}/>
    </Provider>
    </Router>
    

  ,
  document.getElementById('root')
);
