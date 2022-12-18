import React from "react";
import "./Recipiehead.css";

const RecipeMid = () => {
  return (
    <div id="btn_main_div">
      <div id="buttons_1">
        <button class="active_btn cat_btn" id="cat_all" value="">
          All Categories
        </button>
        <button class="cat_btn" id="cat_app" value="appetizers">
          Appetizer
        </button>
        <button class="cat_btn" id="cat_bev" value="beverages">
          Beverages
        </button>
        <button class="cat_btn" id="cat_break" value="breakfast">
          Breakfast
        </button>
        <button class="cat_btn" id="cat_breads" value="bread">
          Breads
        </button>
        <button class="cat_btn" id="cat_con" value="condiments">
          Condiments
        </button>
      </div>
      <div id="buttons_2">
        <button class="cat_btn" id="cat_des" value="desserts">
          Dessert
        </button>
        <button class="cat_btn" id="cat_sna" value="snacks">
          Snacks
        </button>
        <button class="cat_btn" id="cat_main" value="maindishes">
          Main Dishes
        </button>
        <button class="cat_btn" id="cat_sal" value="salads">
          Salads
        </button>
        <button class="cat_btn" id="cat_sid" value="sidedishes">
          Side Dishes
        </button>
        <button class="cat_btn" id="cat_sou" value="soups">
          Soups
        </button>
      </div>
    </div>
  );
};

export default RecipeMid;
