import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Box, Button, Text, useDisclosure, Image, Flex, Avatar } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";


const SignupModal = ({ onClose , setStep }) => {

  const navigate = useNavigate();

  return (

    <>

      <ModalHeader
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt={5}
      >
        <Image src={"https://www.kindmeal.my/images/logo-kindmeal.png"} />
        <Text color="#666666">Join KindMeal For FREE Now</Text>
        <Text fontSize={'sm'} color="#666666">
          Please select the type of membership to proceed
        </Text>
      </ModalHeader>
      <ModalBody>
        <Flex flexDirection={'column'} gap='10px'>

          <Flex flexDirection={['column', 'row']} textAlign={['center', 'start']} gap={['10px', 0]} cursor={'pointer'} border={'1px'} p='10px' borderRadius={'10px'} borderColor='gray.200' onClick={() => setStep(3)}>
            <Box w={['100px', '200px']} margin='auto'>
              <Image
                src="https://www.kindmeal.my/images/join_normal.png"
                alt=""
                objectFit={'contain'}
              />
            </Box>
            <Box px={'10px'}>
              <Text>Food Lover</Text>
              <Text fontSize={'sm'}>
                Join FREE to enjoy yummy deals, share reviews & meet our
                community of compassionate food lovers.
              </Text>
            </Box>
          </Flex>



          <Flex flexDirection={['column', 'row']} textAlign={['center', 'start']} gap={['10px', 0]} cursor={'pointer'} border={'1px'} p='10px' borderRadius={'10px'} borderColor='gray.200' onClick={() => setStep(2)}>
            <Box w={['100px', '300px']} margin='auto'>
              <Image
                src="https://www.kindmeal.my/images/join_shop.png"
                alt=""
                objectFit={'contain'}
              />
            </Box>
            <Box px={'10px'}>
              <Text>Restaurant / Shop Owner</Text>
              <Text style={{ marginTop: "5px", fontSize: "14px", gap: "2px" }}>
                List your food outlet, create exciting vegetarian deals &
                showcase your delicious menu for FREE. Enjoy our yummy deals,
                share reviews & meet food lovers too.
              </Text>
            </Box>
          </Flex>

        </Flex>

        <Box my={'10px'}>
          <Button p='0' border="none" colorScheme="transparent" color="grey" onClick={()=>setStep(1)}>
            <Text fontSize={''}>Already have account? Login</Text>
          </Button>

        </Box>
      </ModalBody>
    </>
  );
};

export default SignupModal;
