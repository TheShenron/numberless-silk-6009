import React from 'react';

import { useSelector } from 'react-redux'
import { Navigate , useLocation } from 'react-router-dom'
import { User_Login_Request } from '../Redux/AuthReducer/reducer'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
function PrivateRoute({children}) {

    const location = useLocation()

    console.log(location)
    const dispatch = useDispatch()
    // console.log(dispatch(user_Login_Request()))

    useEffect(()=>{
        dispatch(User_Login_Request())
    } , [])



    const s = useSelector(state=>state)

    console.log(s)

    // if(!isAuth){
    //     return <Navigate to='/login' state={location.pathname} />
    // }

    return children 
}

export default PrivateRoute;