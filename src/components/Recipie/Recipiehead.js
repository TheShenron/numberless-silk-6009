import React from "react";
import "./Recipiehead.css";

const Recipiehead = () => {
  return (
    <div id="recipe_head">
      <div id="recipe_title">
        <h2>Food & Drinks</h2>
        <h2>|</h2>
        <h2>Yummy Meat-Free Recipes</h2>
      </div>

      <div id="recipe_words">
        <p>
          Want to craft your own creative meat-free meals? Get inspiration from
          other food lovers, or share your own masterpieces!
        </p>
        <p>Transform into a master chef now.</p>
      </div>

      <div id="search_box">
        <input
          type="text"
          placeholder="Search Recipe or User Name"
          id="search"
          // style="margin-top: 0; margin-left: 0"
        />
        <select id="categories">
          <option>All Categories</option>
          <option value="appetizer">Appetizer</option>
          <option value="beverages">Beverages</option>
          <option value="breakfast">Breakfast</option>
          <option value="breads">Breads</option>
          <option value="condiments">Condiments</option>
          <option value="dessert">Dessert</option>
          <option value="snacks">Snacks</option>
          <option value="maindishes">Main Dishes</option>
          <option value="salads">Salads</option>
          <option value="sidedishes">Side Dishes</option>
        </select>
        <button id="search_btn">Search Recipes</button>
        <button id="share_btn">Share My Recipe</button>
      </div>
    </div>
  );
};

export default Recipiehead;
