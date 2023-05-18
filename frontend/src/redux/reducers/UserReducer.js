import { combineReducers } from "redux";
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants/UserConstants";


export const loginReducer = (state = {user : null , authenticate : false}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state , loading : true }
          
        case LOGIN_SUCCESS : 
            return {...state , loading : false , user : action.payload , authenticate : true }

        case LOGIN_FAIL : 
            return {...state , loading : false , error : action.payload.error , authenticate : false}
        default:
            return {...state}
    }
}

const userReducer = combineReducers({
    login : loginReducer
})

export default userReducer 