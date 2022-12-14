import React,{ useEffect,useState } from 'react'
import axios from 'axios'

const MealDeal = () => {
  const {restaurant,setRestaurant} = useState([]);
  axios.get("http://localhost:8080/Meal_Deals_Page").then(res=>setRestaurant(res.data));
  return (
    <>
    <div>
      <h1>Meat-Free Deals</h1>
      <h1>Restaurants In Malaysia</h1>
    </div>
      <p>Browse delicious meat-free, vegetarian deals from top restaurants and cafes! Just click on "Get Free Coupon" to obtain instant discounts and dine at the restaurants. No upfront payment, booking or printing is needed. If you share it on social media, you'll even DOUBLE your discount!</p>
      <div>
        <input type="text" placeholder='Search Shop or Deal Name'/>
        <select>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <input type="text" />
        <button></button>
        <button></button>
      </div>
    </>
  )
}

export default MealDeal