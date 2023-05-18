import { applyMiddleware, combineReducers, createStore }  from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import userReducer from './reducers/UserReducer'

let initialState = {


}

const rootReducer = combineReducers({
    user : userReducer
})  


const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(thunk)))

export default  store