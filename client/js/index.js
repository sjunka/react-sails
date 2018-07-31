// React imports 
import React from 'react';
import { render } from 'react-dom';

// Redux imports
import thunk from 'redux-thunk';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

// Bootstrap css import
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom reducer imports
import productsReducer from './reducers/products-reducer';
import userReducer from './reducers/user-reducer';

import App from './components/app/App';

// All reducers
const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
});

// All store enhancements 
const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Store
const store = createStore(
  allReducers,
  {
    products: [{ name: 'iPhone' }],
    user: 'Sergio'
  },
  allStoreEnhancers
);


render(
<Provider store={store} >
  <App />
</Provider>,
document.getElementById('root')
);
