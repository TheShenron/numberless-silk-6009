import * as types from "./actionType"

export const Login_Request = ()=>{
    return {
        type: types.LOGIN_REQUEST
    }
}

export const Login_Success = (payload)=>{
    return {
        type: types.LOGIN_SUCCESS,
        payload
    }
}

export const Login_Failure = ()=>{
    return {
        type: types.LOGIN_FAILURE
    }
}