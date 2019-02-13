import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import
import  { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

// any time we dispatch an action, it will send to redux thunk as middleware
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.querySelector('#rlijflsjfp23-0lkfsda')
);
