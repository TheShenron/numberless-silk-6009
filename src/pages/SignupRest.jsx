import { Box, color, SimpleGrid, useToast } from "@chakra-ui/react";
import React, { useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { register } from "../Redux/AuthReducer/action";
const Container = styled.div`
  margin-top: 8px;
  background-color: #fcfcfc;
`;
const Signupdiv = styled.div`
  width: 80%;
  margin: auto;
  margin-bottom: 100px;
  // border:1px solid red;
  gap: 10px;
  display: flex;
  flex-direction: row;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const Namediv = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const Signupdivimg = styled.div`
  width: 23%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const Signupdivdetail = styled.div`
  width: 72%;
  margin-left: 5%;
`;
const Divimg = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid grey;
  border-radius: 10px;
  margin-bottom: 35px;
  &:last-child {
    height: auto;
  }
  &:nth-child(2) {
    background-color: white;
  }
  &:nth-child(3) {
    background-color: white;
  }
`;
const Imgdiv = styled.div`
  width:80%;
  height: 100px;
  // border : 1px solid red;
  margin: 20px auto;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const ImgP = styled.p`
  font-size: 14px;
  color: #666666;
  font-weight: 600;
  text-align: center;
  margin: 10px 0 0 0;
`;
const Para = styled.p`
  font-size: 22px;
  color: #444444;
  text-align: center;
`;
const L = styled.li`
  color: #666666;
  font-size: 14px;
  text-align: left;
`;
const Heading = styled.p`
  font-size: 26px;
  font-weight: 600;
`;
const Signupdetaildiv = styled.div`
  width: 90%;
  // border : 1px solid red;
  margin: 50px 10px 20px 10px;
  display: flex;
`;
const Detailnamediv = styled.div`
  width: 23%;
  // border : 1px solid black;
  padding-left: 10px;
`;
const Detaildiv = styled.form`
  width: 72%;
  // border: 1px solid grey;
  margin-left: 5%;
`;
const P = styled.p`
  font-size: 15px;
`;
const Input = styled.input`
  font-family: "Roboto", Arial;
  font-size: 16px;
  font-weight: normal;
  line-height: 20px;
  color: #666666;
  padding: 3px 10px 3px 10px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  &:focus {
    outline: none;
  }
`;
const InputP = styled.p`
  font-size: 13px;
  color: grey;
`;
const BBannerdiv = styled.div`
  width: 100%;
  height: 250px;
  margin: 0;
  // border : 1px solid lightgrey;
  padding-top: 25px;
  background-color: #e0e0e0;
`;

const BBannerimgdiv = styled.div`
  width: 50%;
  height: 100%;
  margin: auto;
  // border : 1px solid lightgrey;
  // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const BBannerimg = styled.img`
  width: 100%;
  height: 100%;
`;
const initialState = {
  email: "",
  password: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

const SignupRest = () => {
  const toast = useToast();
  const [state, setState] = useReducer(reducer, initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    document.title =
      "Sign Up For Delicious Discounted Meat-Free Meals | KindMeal.my";
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch(state)
      .then((r) => {
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("/", { replace: true });
      })
      .catch((e) => {
        toast({
          title: "Registration Failed",
          description: "Try Again",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return (
    <Container>
      <Signupdiv>
        <Signupdivimg>
          <Divimg>
            <Imgdiv>
              <Img
                src="https://www.kindmeal.my/images/join_normal.png"
                alt=""
              />
              <ImgP>Food Lover Sign Up</ImgP>
            </Imgdiv>
          </Divimg>
          <Divimg>
            <Imgdiv>
              <Img src="https://www.kindmeal.my/images/join_shop.png" alt="" />
              <ImgP>Restaurant Sign Up</ImgP>
            </Imgdiv>
          </Divimg>
          <Divimg>
            <Para>Why KindMeal?</Para>
            <ul>
              <br />
              <L style={{ marginLeft: "30px" }}>Exclusive meat-free deals</L>
              <L style={{ marginLeft: "30px" }}>Share yummy food moments</L>
              <L style={{ marginLeft: "30px" }}>Meet friendly food lovers</L>
              <L style={{ marginLeft: "30px" }}>Discover cool restaurants</L>
              <L style={{ marginLeft: "30px" }}>Email updates on tasty deals</L>
              <L style={{ marginLeft: "30px" }}>Instant coupons dining</L>
              <L style={{ marginLeft: "30px" }}>
                No upfront payment, booking or printing
              </L>
              <L style={{ marginLeft: "30px" }}>More about KindMeal »</L>
            </ul>
            <br />
          </Divimg>
        </Signupdivimg>
        <Signupdivdetail>
          <div style={{ display: "flex" }}>
            <Heading>Restaurant / Shop Owner? Sign Up Now. </Heading>
            {/* <Heading style={{ color: "#2184ff", marginLeft: "10px" }}>
              {" "}
              Login With Facebook
            </Heading> */}
          </div>
          <p style={{ fontSize: "16px", fontWeight: "600" }}>
          Improve your business, 
          build brand loyalty, and save precious animal lives! Join KindMeal
           now to enjoy the following features:
          </p>
          <ul style={{marginLeft: "35px", marginTop: "10px"}}>
            <li>Effectively reach over 200,000 consumers</li>
            <li>Feature your shop across premium partner platforms & media channels</li>
            <li>Offer coupons & deals to attract new customers</li>
            <li>Showcase your delicious meat-free meals</li>
            <li>Interact with our community of food lovers</li>
            <li>Get your exclusive Shop Page — <a href="https://KindMeal.my/YourShopName" style={{color: "red"}}>https://KindMeal.my/YourShopName</a></li>
          </ul>
          <br />
          <p style={{ fontSize: "16px", fontWeight: "600" }}>
          To support our welfare causes, we offer simple, affordable 
          Premium Plans on a monthly subscription basis, starting from RM 99 only. No deal commissions,
           no hidden fees. Premium Plan details are available upon signing up.
          </p>
          <div style={{marginTop: "30px"}}> 
             <h2 style={{fontSize: "22px", fontWeight: "400"}}> Personal Profile </h2>
             <p  style={{ fontSize: "16px", fontWeight: "350" }}>First, we setup your personal profile, then proceed to configure your shop promotions.</p>
              </div>
          <Signupdetaildiv>     
            <Detailnamediv>
              <br />
              <P>Your Name</P>
              <br />
              <br />
              <P>Email</P>
              <br />
              <br />
              <P>Re-Enter Email:</P>
              <br />
              <br />
              <P>Password</P>
              <br />
              <br />
              <P>Username</P>
              <br />
              <br />
              <P>Birth Date</P>
              <br />
              <br />
              <P>Country</P>
              <br />
              <br />
              <P>State</P>
              <br />
              <br />
              <P>Gender</P>
              <br />
              <br />
              <P>Profile Photo:</P>
            </Detailnamediv>

            {/* <br /> */}
            <Detaildiv onSubmit={handleSubmit}>
              <div style={{ display: "flex" }}>
                <InputP>First name</InputP>
                <InputP style={{ marginLeft: "170px" }}>Last name</InputP>
              </div>
              <Namediv style={{ display: "flex" }}>
                <Input
                  name="name"
                  type="text"
                  title="First name"
                  value={state.name}
                  
             
                />
                <Input
                  name="lastname"
                  style={{ marginLeft: "10px" }}
                  type="text"
                  title="First name"
                />
              </Namediv>

              <br />
              <div style={{ display: "flex" }}>
                <InputP>
                  Your email must be correct to receive activation email
                </InputP>
              </div>
              <div style={{ display: "flex" }}>
                <Input
                  name="email"
                  style={{ width: "80%" }}
                  type="email"
                  value={state.email}
                  onChange={(e) =>
                    setState({ type: "email", payload: e.target.value })
                  }
                  required
                />
              </div>

              <br />
              <div style={{ display: "flex" }}>
                <Input
                  name="re_enter_email"
                  style={{ width: "80%" }}
                  type="email"
                />
              </div>

              <br />
              <div style={{ display: "flex" }}>
                <Input
                  name="password"
                  style={{ width: "80%" }}
                  type="password"
                  value={state.password}
                  onChange={(e) =>
                    setState({ type: "password", payload: e.target.value })
                  }
                  required
                />
              </div>

              <br />
              <div style={{ display: "flex" }}>
                <InputP>
                  Choose a cool username for your Personal Profile page,
                  comments &amp; reviews
                </InputP>
              </div>
              <div style={{ display: "flex" }}>
                <Input
                  name="username"
                  style={{ width: "80%" }}
                  type="text"
                  value={state.username}
                />
              </div>

              <br />
              <div style={{ display: "flex" }}>
                <InputP>Only your age will be publicly visible</InputP>
              </div>
              <div style={{ display: "flex" }}>
                <Input
                  name="birth"
                  style={{ width: "80%" }}
                  type="date"
                  placeholder="Month/Day/Year"
                />
              </div>

              <br />
              <div style={{ display: "flex" }}>
                <Input
                  name="country"
                  style={{ width: "80%" }}
                  type="text"
                  placeholder="Select Country"
                />
              </div>

              <br />
              <div style={{ display: "flex" }}>
                <Input
                  name="state"
                  style={{ width: "80%" }}
                  type="text"
                  placeholder="Select State"
                />
              </div>

              <br />
              <div>
                <select
                  name="gender"
                  style={{
                    padding: "10px",
                    border: "1px solid lightgrey",
                    fontSize: "16px",
                  }}
                  required
                >
                  <option>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <br />
              <div>
                <input
                  name="profile_photo"
                  type="file"
                  placeholder="Select Photo"
                ></input>
              </div>
              <div style={{ display: "flex", margin: "10px 0 0 0px" }}>
                <input type="checkbox" />
                <p style={{ marginLeft: "3px" }}>
                  {" "}
                  I agree to KindMeal.my's Terms &amp; Conditions
                </p>
              </div>
              <Input
                type={"submit"}
                value="Set Up My Shop & Deals >>"
                style={{
                  display: "block",
                  height: "45px",
                  lineHeight: "25px",
                  fontSize: "18px",
                  padding: "0px 40px 0px 40px",
                  color: "#fff",
                  marginTop: "5px",
                  fontWeight: "bold",
                  background: "#f53838",
                  cursor: "pointer",
                  border: "none",
                  borderRadius: "8px",
                }}
              />
            </Detaildiv>
          </Signupdetaildiv>
        </Signupdivdetail>
      </Signupdiv>
      <BBannerdiv>
        <BBannerimgdiv>
          <BBannerimg
            src="https://www.kindmeal.my/images/how_kindmeal_works.png"
            alt=""
          />
        </BBannerimgdiv>
      </BBannerdiv>
    </Container>
  );
};

export default SignupRest;

