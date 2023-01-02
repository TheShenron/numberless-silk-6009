import React from "react";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Heading,
  Image
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <>
      <Box
        bg={useColorModeValue('gray.100')}
        color={useColorModeValue('black')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 2, sm: 2, md: 4 }} spacing={8}>
            <Stack align={'flex-start'}>
              <Heading fontWeight={['500']} size={['lg']} >General</Heading>
              <Link href={'#'}>Overview</Link>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'#'}>Features</Link>
                <Tag
                  size={'sm'}
                  bg={useColorModeValue('green.300', 'green.800')}
                  ml={2}
                  color={'white'}>
                  New
                </Tag>
              </Stack>
              <Link href={'#'}>Tutorials</Link>
              <Link href={'#'}>Pricing</Link>
              <Link href={'#'}>Releases</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Heading fontWeight={['500']} size={['lg']} >Features</Heading>
              <Link href={'#'}>About Us</Link>
              <Link href={'#'}>Press</Link>
              <Link href={'#'}>Careers</Link>
              <Link href={'#'}>Contact Us</Link>
              <Link href={'#'}>Partners</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Heading fontWeight={['500']} size={['lg']} >Social Media</Heading>
              <Link href={'#'}>Cookies Policy</Link>
              <Link href={'#'}>Privacy Policy</Link>
              <Link href={'#'}>Terms of Service</Link>
              <Link href={'#'}>Law Enforcement</Link>
              <Link href={'#'}>Status</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Heading fontWeight={['500']} size={['lg']} >Mobile</Heading>

              <Link href={'#'}>Facebook</Link>
              <Link href={'#'}>Twitter</Link>
              <Link href={'#'}>Dribbble</Link>
              <Link href={'#'}>Instagram</Link>
              <Link href={'#'}>LinkedIn</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}>
            {/* <Logo /> */}
            <Image src="https://www.kindmeal.my/images/logo-kindmeal.png" width={['150px']} />
          </Flex>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            © 2022 KindMeal.com All rights reserved
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
