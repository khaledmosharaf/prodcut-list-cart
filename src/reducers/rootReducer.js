import { combineReducers } from 'redux';
import { productsReducer, cartReducer } from 'reducers';

export const rootReducer = combineReducers({ productsReducer, cartReducer });
