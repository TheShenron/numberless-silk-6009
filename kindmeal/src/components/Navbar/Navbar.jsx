import React from "react";
import styles from "./Navbar.module.css";
import { BsLink45Deg, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.navbar_logo}>
          <Link to="/"> <img src="/logo-kindmeal.png" alt="logo-kindmeal" /></Link>
        </div>
        <div className={styles.navbar_social}>
          {/* <BsLink45Deg color="white" />
          <FaFacebook color="white" />
          <BsTwitter color="white" /> */}
        </div>
        <div className={styles.navbar_login}>
          {/* <p>Login</p> */}
          <button className={styles.navbar_fb}><Link>Login</Link></button>
          <button className={styles.navbar_email}><Link>Signup</Link></button>
          {/* <p>Sign up</p> */}
        </div>
      </div>
      <div className={styles.navigate_div}>
        <div className={styles.navigate}>
           <div> <Link to="/"> Home</Link></div>
           <div> <Link to="/deals"> MealDeal</Link></div>
           <div> <Link to="/moments"> KindMoments</Link></div>
           <div> <Link to="/recipes"> Recipes</Link></div>
           <div> <Link to="/"> Directory</Link></div>
           <div> <Link to="/"> Article</Link></div>
           <div> <Link to="/"> Mobile App</Link></div>
           <div> <Link to="/"> Help</Link></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
