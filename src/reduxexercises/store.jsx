import {createStore , combineReducers}  from  'redux'
import { colors , sort } from  './reducers'




const store = createStore(
    combineReducers({ colors , sort }),
    (localStorage['redux-store'])  ?
        JSON.parse(localStorage['redux-store'])  :
        {}
)



export  default store