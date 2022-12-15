import React,{ useEffect,useState } from 'react'
import axios from 'axios'
import RestaurantCard from '../components/RestaurantCard';

const MealDeal = () => {
  const [restaurants,setRestaurant] = useState();
  const getRestaurant = () =>{
    axios.get("http://localhost:8080/Meal_Deals_Page")
  .then(res=>{
    console.log(res.data[0].foodItem)
    setRestaurant(res.data[0].foodItem)
  })
  .catch(er=>{
    console.log(er);
  })
  }
  useEffect(()=>{
     getRestaurant();
  },[])
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
          <option value="pasta">Pasta</option>
          <option value="burger">Burger</option>
          <option value="break">Breakfast</option>
          <option value="bakery">Bakery</option>
          <option value="td">Tea & Desert</option>
          <option value="ld">Local Delights</option>
          <option value="J&K">Jap & Korean</option>
          <option value="chinese">Chinese</option>
          <option value="indian">Indian</option>
        </select>
        <select >
          <option value=''>All Locations</option>
          <option value="ampang">Ampang</option>
          <option value="bansagar">Bangsar</option>
          <option value="bansagrs">Bangsar South</option>
          <option value="banting">Banting</option>
          <option value="kepong">Kepong</option>
          <option value="klang">Klang</option>
          <option value="MK">Mont Kiara</option>
          <option value="okr">Old Klang Road</option>
        </select>
        <button>Search Deals</button>
        <button>Browse Restaurants</button>
      </div>
      <div><img src="https://www.kindmeal.my/images/banner_directory.jpg" alt="banner" /></div>
      {/* {render restaurant cards} */}
      {restaurants && restaurants.map((restaurant)=><RestaurantCard key={restaurant.id}/>)}
      <div><img src="https://www.kindmeal.my/images/how_kindmeal_works.png" alt="banner" /></div>
    </>
  )
}

export default MealDeal