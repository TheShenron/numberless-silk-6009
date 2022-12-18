import React from "react";
import "./Recipiehead.css";

import Recipes from "./data.js";

const RecipieContainer = () => {
  
  return (
    <div id="recipe_container">
      {Recipes.map((recipe) => {
        const {
          user,
          userimage,
          coverimage,
          recipeimage,
          title,
          category,
          time,
          likes,
          comments,
          followers,
          servings,
          rating,
          description,
          ingredients,
          directions,
          morephotos,
          video,
        } = recipe;
        return (
          <div class="card">
            <div class="top_bar">
              <div class="user_logo">
                <img src={userimage} alt={user} />
              </div>
              <div class="user_name">{user}</div>
              <button fdprocessedid="nkixmh">View</button>
            </div>
            <div
              class="mid_div"
              style={{
                backgroundImage: `url(${recipeimage})`,
              }}
            >
              <div class="title_strip">{title}</div>
            </div>
            <div class="bottom_bar">
              <div>
                <div>
                  <img
                    src="https://www.kindmeal.my/images/icon_time_small.png"
                    alt={user}
                  />
                </div>
                <div>{time}</div>
              </div>
              <div>
                <div>
                  <img src="https://www.kindmeal.my/images/icon_heart_small.png" />
                </div>
                <div>{likes}</div>
              </div>
              <div>
                <div>
                  <img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" />
                </div>
                <div>{comments}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecipieContainer;
