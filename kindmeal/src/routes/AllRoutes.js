import React from 'react';
import { Route, Routes } from 'react-router-dom';

// All pages imports..
import ErrorPage from '../pages/ErrorPage';
import Homepage from '../pages/Homepage';
import Identify from '../pages/Identify';
import UserRecipe from '../pages/UserRecipe'
import UserMoment from '../pages/UserMoment'
import RestaurantDeals from '../pages/RestaurantDeals'
import RestaurantLocation from '../pages/RestaurantLocation'
import RestaurantMenu from '../pages/RestaurantMenu'
import Deals from '../pages/Deals'
import Moments from '../pages/Moments';
import Recipes from '../pages/Recipes';
import Signup from '../pages/Signup';
import SignupJoin from '../components/SignupJoin';
import SignupJoinshop from '../components/SignupJoinshop';
import Login from '../pages/Login';

// Admin 
import Dashboard from '../pages/Dashboard';
import UpdateDetails from '../pages/UpdateDetails';

function AllRoutes(props) {
    return (
        <Routes>
            
            <Route path='/' element={<Homepage/>}/>
            
            <Route path='/:name' >
                <Route index element={<Identify/>} />
                <Route path='recipes/:id' element={<UserRecipe/> } />
                <Route path='moments/:id' element={<UserMoment/>} />
                <Route path='deals/:id' element={<RestaurantDeals/>} />
                <Route path='menu' element={<RestaurantMenu/>} />
                <Route path='location' element={<RestaurantLocation/>} />
                <Route path='*' element={<ErrorPage/>} />
            </Route>

            <Route path='/deals' element={<Deals/>}/>
            <Route path='/moments' element={<Moments/>}/>
            <Route path='/recipes' element={<Recipes/>}/>
            
            <Route path='/signup' >
                <Route index element={<Signup/>} />
                <Route path='join' element={<SignupJoin/>} />
                <Route path='joinshop' element={<SignupJoinshop/>} />
                <Route path='*' element={<ErrorPage/>} />
            </Route>

            {/* Admin Part */}
            <Route path='/dashboard/:name'>
                <Route index element={<Dashboard/>} />
                <Route path='updatedetail' element={<UpdateDetails/>} />
                {/*  Routes for CURD operation */}
                <Route path='*' element={<ErrorPage/>} />
            </Route>
            
            <Route path='/login' element={<Login/>}/>
            <Route path='*' element={<ErrorPage/>}/>

        </Routes>
    );
}

export default AllRoutes;

