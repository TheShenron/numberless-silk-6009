import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from "../styles/Restaurant.module.css";

function Restaurant() {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurant, setRestaurant] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/Meal_Deals_Page`)
      .then((res) => setRestaurants(res.data[0].foodItem))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    var result = restaurants.filter((item) => item.id == id);
    console.log(result, "ashdg");
    setRestaurant(result);
  }, [restaurants]);
  return (
    <div>
      {restaurant.length > 0 && (
        <>
          <div className={styles.backgroudimage}>
            <img
              src={restaurant[0].page[0].backgroundImg}
              alt="background image"
            />
          </div>
          <div className={styles.profile}>
            <div className={styles.profilephoto}>
              <img
                src={restaurant[0].page[0].profilePic}
                alt="background image"
              />
            </div>
            <div>
              <div className={styles.restaurantname}>
                {restaurant[0].page[0].name}
              </div>
              <div className={styles.menu}>
                <div>Overview</div>
                <div>Meal Deals</div>
                <div>Food Menu</div>
                <div>Location</div>
              </div>
            </div>
          </div>
          <div className={styles.details}>
            <h1>`category`</h1>
            <div className={styles.pricedetail}>
              <div className={styles.foodimage}>
                <img src={restaurant[0].img} alt="food image" />
              </div>
              <div className={styles.price}>
                <div>
                  <p>Normal Price</p>
                  <p className={styles.price_price}>
                    RM{restaurant[0].normal_price}
                  </p>
                  <p>& above</p>
                </div>
                <div className={styles.price_discount}>
                  <p>Kindmeal Discount</p>
                  <p className={styles.discount_price}>
                    {restaurant[0].discount} off
                  </p>
                </div>
                <div className={styles.price_coupon}>
                  <p>
                    No pre-payment or booking needed. Get coupon & dine
                    instantly!
                  </p>
                  <button>Get Free Coupon</button>
                  <p>Grab this KindMeal Coupon now to enjoy </p>
                </div>
              </div>
            </div>
            <div className={styles.productdetail}>
              <div>
                <div>
                    <h1>Delicious Details</h1>
                    <p>Here are exciting deals brought to you by Garden Vegetarian Cafe.To take advantage of a deal, just click into it and obtain the corresponding coupon.</p>
                </div>
                <div>Diet Restriction</div>
              </div>
              <div>
                <div>
                    <h1>Location</h1>
                    <p>Garden Vegetarian Cafe No. 7-2-2, Jalan Setia Prima (D) U13/D, Setia Alam, Seksyen U13, 40170 Shah Alam , Selangor Opens: Mon - Sun: 11am - 8pm Tel: 03-33592676 / 011-25284868</p>
                </div>
                <div>
                    <h1>Terms And Conditions</h1>
                    <p>Exclusivity  : <span></span></p>
                    <p>Reservation  : <span></span></p>
                    <p>Dining Terms : <ul><li>Additional Service Charge applicable</li>
                    <li>There is no SST</li>
                    <li>Discount is not valid for delivery</li>
                    <li>Discount is not valid for promotional items</li>
                    <li>Discount is not valid for Kuih</li>
                    <li>Outdoor dining area is pet-friendly</li>
                    </ul></p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Restaurant;
