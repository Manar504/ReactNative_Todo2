import * as React from 'react';



import { Provider } from 'react-redux'
import Router from './src/Router/index';
import store from './src/store/store';


export default function App() {
  return (  
    <Provider store={store}>
    <Router>

    </Router> 
    </Provider>
     
    
  
  );
}


