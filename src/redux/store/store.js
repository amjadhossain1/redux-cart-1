import { createStore } from 'redux'
import cardReducers from '../reducers/cartReducers'


export const store = createStore(cardReducers);