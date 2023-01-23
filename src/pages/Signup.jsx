import React from 'react';
import Login from '../Modal/Login';
import SignupModal from '../Modal/SignupModal';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  Avatar,
  Button
} from '@chakra-ui/react'
import { useState } from 'react';
import JoinShop from '../Modal/JoinShop';
import JoinUser from '../Modal/JoinUser';


function Signup({avatar}) {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [step, setStep] = useState(0)

  const steps = [
    <SignupModal onClose={onClose} setStep={setStep} />,
    <Login setStep={setStep} />,
    <JoinShop setStep={setStep} />,
    <JoinUser setStep={setStep} />
  ]



  return (
    <>

      { avatar ? <Avatar onClick={onOpen} src='#' size='md' bg='gray.200'> </Avatar> : 
      <Button variant={'outline'} onClick={onOpen} >Login</Button>
      }

      <Modal isOpen={isOpen} onClose={onClose} size={step > 1 ? 'xl' : 'md'}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton onClick={() => setStep(0)} />

          {steps[step]}

        </ModalContent>
      </Modal>

    </>
  );
}

export default Signup;