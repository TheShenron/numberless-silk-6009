import { Login_Failure, Login_Request, Login_Success } from "./action"
import * as types from "./actionType"
import axios from "axios"

const initialState = {
    isAuth: false,
    isLoading: false,
    isError: false,
    token: ""
}

export const reducer = (state = initialState , action)=>{

    switch (action.type) {

        case types.LOGIN_REQUEST:
            return {
                ...state ,
                isLoading: true
            }

        case types.LOGIN_SUCCESS:
            return {
                ...state , 
                isLoading: false,
                token: action.payload,
                isAuth: true
            }
        
        case types.LOGIN_FAILURE:
            return {
                ...state ,
                isLoading: false,
                isError: true
            }


        default:
            return state
    }

}


export const User_Login_Request = (email,password)=>{
    
    return async function (dispatch , getState){

        dispatch(Login_Request())
        return axios.get("https://jsonplaceholder.typicode.com/posts" , {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        })
        .then(d=>{
            console.log(d)
            dispatch(Login_Success(d.data))
        })
        .catch(err=>{
            console.log(err)
            dispatch(Login_Failure())
        })

    }

}