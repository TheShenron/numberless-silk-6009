import React, { useState } from "react";
import styled from "styled-components";
import {  ModalBody,  ModalHeader,  Box, Input,  useToast, Button, Center, Text,  } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";

const Logo = styled.img`
  @media only screen and (max-width: 1150px) {
    width: 70%;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Login = ({ setStep }) => {

  const toast = useToast();

  const [loginData , setLoginData] = useState({email:"" , password:""})

  const HandleSubmit = ()=>{
    console.log("HandleSubmit")
  }


  return (

    <>

          <ModalHeader
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mt={5}
          >
            <Logo src={"https://www.kindmeal.my/images/logo-kindmeal.png"} />
            <Text color="#666666">Member Login</Text>
          </ModalHeader>
        
          <ModalBody mt={5}>
            <Form>
              <Input
                width="65%"
                variant="outline"
                type="email"
                name="email"
                value={loginData.email}
                onChange={(e)=>setLoginData({...loginData , [e.target.name] : e.target.value})}
                placeholder="Your Email"
                isRequired
              />
              <Input
                mt={3}
                width="65%"
                variant="outline"
                type="password"
                name="password"
                value={loginData.password}
                onChange={(e)=>setLoginData({...loginData , [e.target.name] : e.target.value})}
                placeholder="Your Password"
                isRequired
              />
              <Input
                cursor="pointer"
                mt={6}
                width="45%"
                type={"submit"}
                onClick={HandleSubmit}
                value="Login"
                fontSize={20}
                fontWeight={700}
                bg="#04be5a"
                color="#ffffff"
              />
            </Form>
            <br />
            <hr />
            <a
              href="https://www.kindmeal.my/login.php?action=facebook"
              target="blank"
            >
              <Center p={8}>
                <Button
                  w={"xs"}
                  maxW={"sm"}
                  colorScheme={"facebook"}
                  leftIcon={<FaFacebook />}
                >
                  <Center>
                    <Text>Login With Facebook</Text>
                  </Center>
                </Button>
              </Center>
            </a>
            <Box display="flex" justifyContent="space-between" pb={3}>
              <Button colorScheme="transparent" color="grey">
                <Text fontSize={'sm'}>Forgot Password ?</Text>
              </Button>

              <Button colorScheme="transparent" color="grey" onClick={()=>setStep(0)} >
                <Text fontSize={'sm'}>Not a member? Sign up FREE!</Text>
              </Button>
            </Box>
          </ModalBody>

    </>
  );
};

export default Login;
