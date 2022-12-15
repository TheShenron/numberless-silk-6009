import React from "react";

const RestaurantCard = () => {
  return (
    <div>
      <div>
        <img src="https://www.kindmeal.my/photos/deal/7/713-5140-l.jpg" alt="" />
      </div>
      <div>
        <p>category</p>
      </div>
      <div>
        <h4>title</h4>
        <p>description</p>
        <div>
          <button>Get FREE Coupon</button>
          <div>
            {/* render stars */}
            stars
          </div>
        </div>
      </div>
      <div>
        <div>contains</div>
        <div>discount</div>
        <div>expiry</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
