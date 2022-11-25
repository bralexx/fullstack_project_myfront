import {createStore} from 'redux'
import {MenuStateReducer} from './MenuStateReduser'


export const store = createStore(MenuStateReducer);