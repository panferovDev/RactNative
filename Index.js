import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './src/App';
import rootReducer from './src/redux/rootReducer';

const composeEnhancers = composeWithDevTools({})
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default class Index extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}