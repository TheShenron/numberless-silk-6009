import { Avatar, Link, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Text, useDisclosure, Box } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Login from '../../Modal/Login';
import SignupModal from '../../Modal/SignupModal';
import Signup from '../../pages/Signup';

function Drower(props) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()


    return (
        <div>
            <Avatar display={['block', 'block', 'none', 'none']} src='#' onClick={onOpen} size='md' bg='gray.200'> </Avatar>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Flex alignItems='center' gap={['10px']}>
                            <Avatar src='#' onClick={onOpen} size='md' bg='gray.200'> </Avatar>
                            <Text>Guest</Text>
                        </Flex>
                    </DrawerHeader>

                    <DrawerBody p='0'>

                        <Flex flexDirection='column'>
                            <Link _activeLink={{color:"red"}} as={NavLink} onClick={onClose} to='/'><Box borderTop='1px solid' borderColor="gray.100" p='15px 30px'>  Home </Box> </Link> 
                            <Link as={NavLink} _activeLink={{color:"red"}} onClick={onClose} to='/deals' > <Box borderTop='1px solid' borderColor="gray.100" p='15px 30px'>  Meal Deals </Box> </Link>
                            <Link as={NavLink} _activeLink={{color:"red"}} onClick={onClose} to='/moments' > <Box borderTop='1px solid' borderColor="gray.100" p='15px 30px'>  Kind Moments </Box> </Link>
                            <Link as={NavLink} _activeLink={{color:"red"}} onClick={onClose} to='/recipes' > <Box borderTop='1px solid' borderColor="gray.100" p='15px 30px'>  Recipes </Box> </Link>
                            <Link as={NavLink} _activeLink={{color:"red"}} onClick={onClose} to='/directory' > <Box border='1px solid' borderColor='gray.100' p='15px 30px'>  Directory </Box> </Link>
                            <Link as={NavLink} _activeLink={{color:"red"}} onClick={onClose} to='/article' > <Box border='1px solid' borderColor='gray.100' p='15px 30px'>  Articles </Box> </Link>
                            <Link as={NavLink} _activeLink={{color:"red"}} onClick={onClose} to='/mobile' > <Box border='1px solid' borderColor='gray.100' p='15px 30px'>  Mobile App </Box> </Link>
                            <Link as={NavLink} _activeLink={{color:"red"}} onClick={onClose} to='/help' > <Box border='1px solid' borderColor='gray.100' p='15px 30px'>  Help </Box> </Link>

                        </Flex>

                    </DrawerBody>

                    <DrawerFooter>
                       <Signup avatar={false} />
                    </DrawerFooter>


                </DrawerContent>
            </Drawer>
        </div>
    );
}

export default Drower;
