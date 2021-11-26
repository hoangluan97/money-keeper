import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const middleware = [thunk];

if(process.envn.NODE_ENV !== "production"){
    middleware.push()
}