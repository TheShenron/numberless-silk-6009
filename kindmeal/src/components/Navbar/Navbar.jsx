import React from "react";
import styles from "./Navbar.module.css";
import { BsLink45Deg, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.navbar_logo}>
          <a href=""> <img src="/logo-kindmeal.png" alt="logo-kindmeal" /></a>
        </div>
        <div className={styles.navbar_social}>
          <BsLink45Deg color="white" />
          <FaFacebook color="white" />
          <BsTwitter color="white" />
        </div>
        <div className={styles.navbar_login}>
          <p>Login</p>
          <button className={styles.navbar_fb}>Facebook</button>
          <button className={styles.navbar_email}>Email</button>
          <p>Sign up</p>
        </div>
      </div>
      <div className={styles.navigate_div}>
        <div className={styles.navigate}>
          <div>Home</div>
          <div>MealDeal</div>
          <div>KindMoments</div>
          <div>Recipes</div>
          <div>Directory</div>
          <div>Article</div>
          <div>Mobile App</div>
          <div>Help</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
