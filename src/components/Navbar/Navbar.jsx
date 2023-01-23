import React from 'react';
import Login from '../../Modal/Login'
import { Avatar, Box, Flex, Heading, Image, Link, Spacer } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';
import Drower from './Drower';
import { useState } from 'react';
import SignupModal from '../../Modal/SignupModal';
import Signup from '../../pages/Signup';
const favicon = 'https://www.kindmeal.my/images/logo-kindmeal.png'

function Navbar(props) {


  return (
    <Box position='' width='100%' backgroundColor='white'>

      <Box shadow='sm'>

        <Flex alignItems='center' gap='2' py={['7px', '10px', '13px']} w={['95%', '95%', '80%', '80%']} m='auto' >

          <Flex alignItems='center' gap={'10px'}>
            <Image src={favicon} alt='' width='250px' />
          </Flex>

          <Spacer />

          <Flex alignItems='center' gap={['20px', '30px']} fontWeight='bold' pr={['0px', '0xp', '5px', '20px']} display={['none', 'none', 'flex']}>

            <Link style={{ textDecoration: 'none' }}>
              <Signup avatar={true}/>
            </Link>

          </Flex>


          <Drower />


        </Flex>


      </Box>

      <Box bg='green.400'>

        <Flex
          alignItems='center'
          justifyContent='space-between'
          w={['95%', '95%', '95%', '80%']}
          m='auto'
          display={['none', 'none', 'flex']}
          fontSize={['xl']}
          color='white'>

          <Link as={NavLink} to='/' _hover={{ textDecoration: 'none', backgroundColor: 'green.500' }} _activeLink={{ backgroundColor: "green.600", textDecoration: 'none' }} p={['5px']} fontWeight='500'>Home</Link>
          <Link as={NavLink} to='/deals' _hover={{ textDecoration: 'none', backgroundColor: 'green.500' }} _activeLink={{ backgroundColor: "green.600", textDecoration: 'none' }} p={['5px']} fontWeight='500'>Meal Deals</Link>
          <Link as={NavLink} to='/moments' _hover={{ textDecoration: 'none', backgroundColor: 'green.500' }} _activeLink={{ backgroundColor: "green.600", textDecoration: 'none' }} p={['5px']} fontWeight='500'>Kind Moments</Link>
          <Link as={NavLink} to='/recipes' _hover={{ textDecoration: 'none', backgroundColor: 'green.500' }} _activeLink={{ backgroundColor: "green.600", textDecoration: 'none' }} p={['5px']} fontWeight='500'>Recipes</Link>
          <Link as={NavLink} to='/directory' _hover={{ textDecoration: 'none', backgroundColor: 'green.500' }} _activeLink={{ backgroundColor: "green.600", textDecoration: 'none' }} p={['5px']} fontWeight='500'>Directory</Link>
          <Link as={NavLink} to='/article' _hover={{ textDecoration: 'none', backgroundColor: 'green.500' }} _activeLink={{ backgroundColor: "green.600", textDecoration: 'none' }} p={['5px']} fontWeight='500'>Articles</Link>
          <Link as={NavLink} to='/mobile' _hover={{ textDecoration: 'none', backgroundColor: 'green.500' }} _activeLink={{ backgroundColor: "green.600", textDecoration: 'none' }} p={['5px']} fontWeight='500'>Mobile App</Link>
          <Link as={NavLink} to='/help' _hover={{ textDecoration: 'none', backgroundColor: 'green.500' }} _activeLink={{ backgroundColor: "green.600", textDecoration: 'none' }} p={['5px']} fontWeight='500'> Help </Link>

        </Flex>

      </Box>

    </Box>

  );
}

export default Navbar;