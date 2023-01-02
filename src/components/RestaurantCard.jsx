import React from "react";
import {Link} from 'react-router-dom';
import styles from '../styles/RestaurantCard.module.css'

const RestaurantCard = ({restaurant}) => {
  return (
    <div className={styles.card}>
      <div className={styles.mealimage}>
        <Link to={`restaurant/${restaurant.id}`}>
          <img src={restaurant.img} alt="meal"/>
        </Link>
      </div>
      <div className={styles.category}>
        <p>{restaurant.category}</p>
      </div>
      <div className={styles.itemdetails}>
        <h4>{restaurant.title} - <span>{restaurant.name}</span></h4>
        <p>{restaurant.description}</p>
        <div className={styles.couponstar}>
          <button>Get FREE Coupon</button>
          <div>
            {
              
            }
          </div>
        </div>
      </div>
      <div className={styles.itemothers}>
        <div className={styles.contain}>
           <div>{restaurant.contains.egg?<img src="https://www.kindmeal.my/images/icon_egg.png" alt="" />
           :<img src="https://www.kindmeal.my/images/icon_egg_disabled.png" alt="" />}</div>
           <div>{restaurant.contains.dairy?<img src="https://www.kindmeal.my/images/icon_milk.png" alt="" />
           :<img src="https://www.kindmeal.my/images/icon_milk_disabled.png" alt="" />}</div>
           <div>{restaurant.contains.alcohol?<img src="https://www.kindmeal.my/images/icon_alcohol.png" alt="" />
           :<img src="https://www.kindmeal.my/images/icon_alcohol_disabled.png" alt="" />}</div>
        </div>
        <div className={styles.discount}>
          <h6>kindmeal discount</h6>
          <p>{restaurant.discount}</p>  
         </div>
        <div>
          <p>Expires In</p>
          {restaurant.expiry}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
