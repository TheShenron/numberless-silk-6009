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
          <option value="">All Categories</option>
          <option value="">Pasta</option>
          <option value="">Burger</option>
          <option value="">Breakfast</option>
          <option value="">Bakery</option>
          <option value="">Tea & Desert</option>
          <option value="">Local Delights</option>
          <option value="">Jap & Korean</option>
          <option value="">Chinese</option>
          <option value="">Indian</option>
        </select>
        <select >
          <option value=''>All Locations</option>
          <option value="">Ampang</option>
          <option value="">Bangsar</option>
          <option value="">Bangsar South</option>
          <option value="">Banting</option>
          <option value="">Kepong</option>
          <option value="">Klang</option>
          <option value="">Mont Kiara</option>
          <option value="">Old Klang Road</option>
        </select>
        <button>Search Deals</button>
        <button>Browse Restaurants</button>
      </div>
      <div><img src="https://www.kindmeal.my/images/banner_directory.jpg" alt="banner" /></div>
      {/* {render restaurant cards} */}
      <div><img src="https://www.kindmeal.my/images/how_kindmeal_works.png" alt="banner" /></div>
    </>
  )
}

export default MealDeal