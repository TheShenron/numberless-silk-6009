import React from "react";
import styles from "./Navbar.module.css";
import { BsLink45Deg, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";


import { useNavigate } from "react-router-dom";
import { Tooltip, useDisclosure } from "@chakra-ui/react";
import SignupModal from "../../Modal/SignupModal";
import Login from "../../Modal/Login";
import styled from "styled-components";
const Option = styled.div`
  padding: 3px 5px;
  border-radius: 5px;
  font-size: 12px;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  margin: 0 3px;
  cursor: pointer;
`;


const Navbar = () => {
  const navigate = useNavigate();
  const {
    isOpen: isSignupOpen,
    onOpen: onSignupOpen,
    onClose: onSignupClose,
  } = useDisclosure();
  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.navbar_logo}>

          <a href="/"> <img src="/logo-kindmeal.png" alt="logo-kindmeal" /></a>

          {/* <Link to="/"> <img src="/logo-kindmeal.png" alt="logo-kindmeal" /></Link> */}

        </div>
        <div className={styles.navbar_social}>
          {/* <BsLink45Deg color="white" />
          <FaFacebook color="white" />
          <BsTwitter color="white" /> */}
        </div>
        <div className={styles.navbar_login}>

          <p>Login</p>
          <button className={styles.navbar_fb}>Facebook</button>
          
          <Option onClick={onLoginOpen}>
              <button className={styles.navbar_email}>Email</button>
              <Login isOpen={isLoginOpen} onClose={onLoginClose} />
          </Option>
              
          <Option onClick={onSignupOpen}>
            <button className={styles.navbar_email}>Signup</button>
            <SignupModal isOpen={isSignupOpen} onClose={onSignupClose} />
          </Option>

          {/* <p>Login</p> */}
            {/* <button className={styles.navbar_fb}><Link>Login</Link></button> */}
            {/* <button className={styles.navbar_email}><Link>Signup</Link></button> */}
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
