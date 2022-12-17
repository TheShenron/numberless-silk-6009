import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Signupdivimg = styled.div`
  width: 100%;
  margin: auto;
`;
const Divimg = styled.div`
  width: 100%;
  height: 190px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid grey;
  border-radius: 20px;
  margin-bottom: 35px;
  &:hover {
    background-color: #ededed;
  }
`;
const Imgdiv = styled.div`
  width: 75%;
  height: 160px;
  margin: 0px 8px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const ImgP = styled.p`
  font-size: 18px;
  color: #666666;
  font-weight: 700;
  text-align: left;
  // margin : 10px 0 0 0 ;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 8px 0px;
`;
const Logo = styled.img`
  @media only screen and (max-width: 1150px) {
    width: 70%;
  }
`;

const SignupModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  return (
    <Modal onClose={onClose} size="xl" isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mt={5}
        >
          <Logo src={"https://www.kindmeal.my/images/logo-kindmeal.png"} />
          <Text color="#666666">Join KindMeal For FREE Now</Text>
          <Text fontSize={14} color="#666666">
            Please select the type of membership to proceed
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody onClick={onClose}>
          <Signupdivimg>
            <Divimg onClick={() => navigate("/signup")}>
              <Imgdiv>
                <Img
                  src="https://www.kindmeal.my/images/join_normal.png"
                  alt=""
                />
              </Imgdiv>
              <Content>
                <ImgP>Food Lover</ImgP>
                <p style={{ marginTop: "5px", fontSize: "14px", gap: "2px" }}>
                  Join FREE to enjoy yummy deals, share reviews & meet our
                  community of compassionate food lovers.
                </p>
              </Content>
            </Divimg>
            <Divimg>
              <Imgdiv>
                <Img
                  src="https://www.kindmeal.my/images/join_shop.png"
                  alt=""
                />
              </Imgdiv>
              <Content>
                <ImgP>Restaurant / Shop Owner</ImgP>
                <p style={{ marginTop: "5px", fontSize: "14px", gap: "2px" }}>
                  List your food outlet, create exciting vegetarian deals &
                  showcase your delicious menu for FREE. Enjoy our yummy deals,
                  share reviews & meet food lovers too.
                </p>
              </Content>
            </Divimg>
          </Signupdivimg>

          <Box display="flex" justifyContent="space-between" pb={3}>
            <Button border="none" colorScheme="transparent" color="grey" onClick={onClose}>
              <p onClick={onClose}>Member Login</p>
            </Button>

            <Button colorScheme="transparent" color="grey" onClick={onClose}>
              <p>Forgot Password ?</p>
            </Button>
          </Box>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SignupModal;
