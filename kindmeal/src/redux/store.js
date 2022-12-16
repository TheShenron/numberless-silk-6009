import { legacy_createStore , combineReducers , applyMiddleware  } from 'redux'

import thunk from 'redux-thunk'

import { reducer as AuthReducer } from "./AuthReducer/reducer"

const rootReducer = combineReducers({AuthReducer})

const store = legacy_createStore( rootReducer , applyMiddleware(thunk) )

export { store }