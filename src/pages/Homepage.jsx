import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import { useState } from "react";

import {
  Center,
  Button,
  Image,
  Text,
  Spacer,
  Flex,
  Box,
  Card,
  CardHeader,
  Avatar,
  Heading,
  IconButton,
  CardBody,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';


function Myslider() {

  const [indexCount, setindexCount] = useState(0)

  const imgArr = [
    "https://www.kindmeal.my/photos/deal/6/670-4180-m.jpg",
    "https://www.kindmeal.my/photos/deal/6/698-4639-m.jpg",
    "https://www.kindmeal.my/photos/deal/6/633-3874-m.jpg",
    "https://www.kindmeal.my/photos/deal/7/725-5225-m.jpg"

  ]

  const Owner = [
    "https://www.kindmeal.my/photos/shop/5/512-3751-m.jpg",
    "https://www.kindmeal.my/photos/shop/4/498-3527-m.jpg",
    "https://www.kindmeal.my/photos/shop/6/627-4845-m.jpg",
    "https://www.kindmeal.my/photos/shop/5/512-3751-m.jpg"
  ]


  useEffect(() => {
    let timer = setInterval(() => {
      setindexCount(pre => {
        if (pre === imgArr.length - 1) {
          return pre = 0
        }
        return pre + 1
      })
    }, 2000)

    return () => {
      clearInterval(timer)
    }

  }, [])


  return (
    <Box height={['200px', '300px', '300px', '370px']} width={['100%', "100%", "90%", "80%"]} m='auto'>

      <Flex height={'100%'}>
        <Image width={['100%', '100%', '70%', '70%']} height='100%' src={imgArr[indexCount]} />
        <Image width={['30%']} display={['none', 'none', 'block', 'block']} src={Owner[indexCount]} />
      </Flex>

      <Flex border='1px' borderColor='gray.200' gap={['10px']} alignItems={['center']} p={['5px', '10px', '20px']} overflow={'scroll'} shadow={'md'}>
        {imgArr.map((el, ind) => {
          return <Image key={ind+"subIMG"} width={['100%']} maxW={['150px']} height={['60px', '80px', '100px']} src={el} opacity={indexCount === ind ? 1 : .5} />
        })}
      </Flex>

    </Box>
  )
}


const Cards = ({img}) => {

  return (
    <>
      <Card shadow={'none'} w={['100%', '48%', '31%', '18%']} maxW={['100%', '50%', '35%', '20%']} flexGrow='1'>

        <Image
          height={['200px']}
          borderRadius={['5px']}
          objectFit='cover'
          src={img}
          alt='Chakra UI'
        />

        <CardBody p='2'>
          <Text fontSize={['xs']} py='0'>
            With Chakra UI, I wanted to sync the speed
          </Text>
        </CardBody>

      </Card>
    </>
  )
}


function Homepage() {

  const cardList = [
    "https://www.kindmeal.my/photos/moment/24/24787-48275-s.jpg",
    "https://www.kindmeal.my/photos/moment/24/24786-48272-s.jpg",
    "https://www.kindmeal.my/photos/moment/24/24785-48267-s.jpg",
    "https://www.kindmeal.my/photos/moment/24/24784-48262-s.jpg",
    "https://www.kindmeal.my/photos/moment/24/24781-48255-s.jpg"
  ]


  return (
    <>

      <Myslider />

      <Box style={{ marginTop: "200px" }}>

        {/* yumilicious moments */}
        <Box width={['95%', '95%', '95%', '80%']} m='auto' border='1px' borderColor='gray.100' shadow={'md'} p={[' 10px 20px']}>

          <Flex alignItems={'center'} pb={['10px']} flexWrap='wrap' gap={'10px'}>
            <Text fontSize={'2xl'}>Yummylicious Moments</Text>
            <Spacer />
            <Flex color={'blue'} gap={[ '5px' ,'20px' ,'20px' ,'20px']}>
              <Link href='https://chakra-ui.com' > Secret Recipes </Link>
              <Link href='https://chakra-ui.com' >  Member Hot Picks  </Link>
              <Link href='https://chakra-ui.com' >  Photo Moments </Link>

            </Flex>
          </Flex>

          <Flex m='auto' flexWrap={'wrap'} gap={['20px', '15px', '20px']}>

            {cardList.map((el , ind)=>{
              return <Cards key={ind+'cardMoment'} img={el} />
            })}

          </Flex>

        </Box>

        {/* Discover Recipes */}



        {/* bottom part */}
        <Box my={['20px', '50px']} boxShadow="xs" bgColor={"whiteAlpha.900"}>
          <Box maxW={{ base: "100%", sm: "100%", lg: "70%" }} m="auto" p={10}>
            <Center>
              <Text
                fontSize={['xl']}
                color={"gray.400"}
              >
                Introducing Malaysia's Pioneering Meat-Free Lifestyle Platform
              </Text>
            </Center>
            <br />
            <Flex justifyContent={["start", "center"]} gap={5} flexWrap='wrap'>
              <Text fontSize={'xl'} color='gray.400'>Brought to you by</Text>
              <Image
                w={['50%', '30%',]}
                src="https://www.kindmeal.my/images/logo-petfinder-v2.png"
                alt="logo-petfinder"
              />
            </Flex>
            <br />
            <Center>
              <Text
                color={"gray.400"}
                fontSize={'xl'}
              >
                Instant coupon & dining. No upfront coupon payment, booking or
                printing.
              </Text>
            </Center>
          </Box>


          {/* deals and offers  */}
          <Box w={['90%', '80%']} m="auto" py={['20px', '30px']}>
            <Flex gap={['10px', '20px', '30px']} flexWrap='wrap'>
              <Box border='1px solid' borderColor='gray.100' p={5} borderRadius="5px" w={['100%', '47%', '47%', '23%']} flexGrow='1'>
                <Center>
                  <Image
                    src="https://www.kindmeal.my/images/intro_deal.png"
                    mb="4px"
                  />
                </Center>
                <Center>
                  <Text fontSize={{ base: "sm", sm: "sm", md: "xl", lg: "xl" }}>
                    Get Great Deals
                  </Text>
                </Center>
                <Center>
                  <Text fontSize="sm" textAlign='center'>
                    Show our FREE digital coupons to instantly enjoy exciting
                    deals
                  </Text>
                </Center>
              </Box>
              <Box border='1px solid' borderColor='gray.100' p={5} borderRadius="5px" w={['100%', '47%', '47%', '23%']} flexGrow='1'>
                <Center>
                  <Image
                    src="	https://www.kindmeal.my/images/intro_kindmoment.png"
                    mb="4px"
                  />
                </Center>
                <Center>
                  <Text fontSize={{ base: "sm", sm: "sm", md: "xl", lg: "xl" }}>
                    Share KindMoments
                  </Text>
                </Center>
                <Center>
                  <Text fontSize="sm" textAlign='center'>
                    Spread the joy by sharing your yummy dining moments
                  </Text>
                </Center>
              </Box>
              <Box border='1px solid' borderColor='gray.100' p={5} borderRadius="5px" w={['100%', '47%', '47%', '23%']} flexGrow='1'>
                <Center>
                  <Image
                    src="https://www.kindmeal.my/images/intro_menu.png"
                    mb="4px"
                  />
                </Center>
                <Center>
                  <Text fontSize={{ base: "sm", sm: "sm", md: "xl", lg: "xl" }}>
                    Discover Delicious Food
                  </Text>
                </Center>
                <Center>

                  <Text fontSize="sm" textAlign='center'>
                    Explore the latest exquisite offerings and creative menus
                  </Text>
                </Center>
              </Box>
              <Box border='1px solid' borderColor='gray.100' p={5} borderRadius="5px" w={['100%', '47%', '47%', '23%']} flexGrow='1'>
                <Center>
                  <Image
                    src="https://www.kindmeal.my/images/intro_friends.png"
                    mb="4px"
                  />
                </Center>
                <Center>
                  <Text fontSize={{ base: "sm", sm: "sm", md: "xl", lg: "xl" }}>
                    Meet Food Lovers
                  </Text>
                </Center>
                <Center>
                  <Text fontSize="sm" textAlign='center'>
                    Make new, compassionate friends and share great food tips
                  </Text>
                </Center>
              </Box>
            </Flex>
          </Box>
          {/* another info */}


          <Box maxW={['90%']} m="auto" py={['10px', '20px']}>
            <Center>
              <Text
                fontSize={['md', 'md', 'xl']}
                color={"gray.500"}
              >
                Any restaurant or cafe can join KindMeal, vegetarian or not, as
                long as the deals and menu featured are meat-free
              </Text>
            </Center>
            <Center>
              <Text
                fontSize={['md', 'md', 'xl']}
                color={"gray.500"}
              >
                Enjoy a great meat-free dining experience. Easily save animal
                lives, health, environment and money now!
              </Text>
            </Center>
          </Box>
          {/* join button */}


          <Flex justify={"center"} p={['30px', "50px"]}>
            <Button colorScheme="red" w="451px" h="90px" bgColor="red">
              <Text fontSize={['2xl', "4xl"]} fontWeight='bold'> Join Kindmeal Now</Text>
            </Button>
          </Flex>
          <Center> <Text fontSize="3xl" color={"gray.500"} fontWeight='400' py={['10px', '20px']}>Featured On</Text></Center>
          <Center><Image src="https://www.kindmeal.my/images/media-feature2.png" pb={['20px', '50px']} /></Center>
          <Box bgColor="gray.300">
            <Center><Image src="https://www.kindmeal.my/images/banner_whykindmeal.png" /></Center>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Homepage;
