import React from "react";
import css from "./Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="content">
        <div>
            <ul>
                <b>General</b>
                <li>Home</li>
                <li>Sign up</li>
                <li>Business/Restaurateurs</li>
                <li>Adverstising</li>
                <li>About KindMeal.my</li>
                <li>Help & FAQ</li>
                <li>Terms & Condition</li>
                <li>Inspiring Partners</li>
                <li>LifeStyle Ambassadors</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div>
            <ul>
                <b>Features</b>
                <li>Meat-free-Deal</li>
                <li>Tasty Menus</li>
                <li>Kind Moments</li>
                <li>Meat Free Recipes</li>
                <li>Member Recommendation</li>
                <li>Feature Restaurants</li>
                <li>Food Map</li>
                <li>Become A Superhero</li>
                <li>Latest Comment</li>
            </ul>
        </div>
        <div>
            <ul>
                <b>Social Media</b>
                <li>Kindmeal Widgets</li>
                <li>Twitter</li>
                <li>Instagram</li>
            </ul>
        </div>
        <div>
            <ul>
                <b>Mobile</b>
                <li>iPhone & iPad</li>
                <li>Android App</li>
                <br />
                <b>Exiting Promos</b>
                <li>Free Meals</li>
                <li>Food Blogger</li>
                <li>Uber Chirps</li>
                <li>Jane Goodall Contest</li>
            </ul>
        </div>
        <div>
            <ul>
                <b>PetFinder.my</b>
                <li>Adopt a pet</li>
                <li>Smartphone App</li>
                <li>Wagazine</li>
                <li>Medical Fund</li>
            </ul>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © KindMeal.my, 2014 - 2022. All rights reserved.</p>
        <p>This website promotes compassionate, meat-free dining experience. Some food may contain eggs, dairy products or alcohol, please view individual listings for details.</p>
      </div>
    </div>
  );
};

export default Footer;
