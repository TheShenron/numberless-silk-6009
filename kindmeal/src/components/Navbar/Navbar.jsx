import React from "react";
import styles from "./Navbar.module.css";
import { BsLink45Deg, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
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
        </div>
        <div className={styles.navbar_social}>
          <BsLink45Deg color="white" />
          <FaFacebook color="white" />
          <BsTwitter color="white" />
        </div>
        <div className={styles.navbar_login}>
          <p>Login</p>
          <button className={styles.navbar_fb}>Facebook</button>
          
          <Option onClick={onLoginOpen}>
              <button className={styles.navbar_email}>Email</button>
          </Option>
           <Login isOpen={isLoginOpen} onClose={onLoginClose} />
              
          <Option onClick={onSignupOpen}>Sign Up</Option>
            <SignupModal isOpen={isSignupOpen} onClose={onSignupClose} />
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
