import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeContent from "../components/HomeContent";
import axios from "axios"
import { useState } from "react";

import {
  Center,
  Button,
  Image,
  Text,
  Spacer,
  Grid,
  Flex,
  Box,
} from '@chakra-ui/react';


function Myslider(){

  const [indexCount , setindexCount] = useState(0)

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


  useEffect(()=>{
    let timer = setInterval(()=>{
      setindexCount(pre=>{
        if(pre === imgArr.length - 1){
          return pre = 0
        }
        return pre+1
      })
    } , 2000)

    return ()=>{
      clearInterval(timer)
    }

  } , [])


  return (
    <Box height={[ '200px'  ,'300px' , '300px' ,'370px']} width={['100%' , "100%" , "90%" ,"80%"]} m='auto'>

      <Flex height={'100%'}>
        <Image width={[ '100%','100%','70%','70%']} height='100%' src={imgArr[indexCount]} />
        <Image width={['30%']} display={['none' , 'none' , 'block' , 'block']} src={Owner[indexCount]} />
      </Flex>

      <Flex  border='1px' borderColor='gray.200' gap={['10px']} alignItems={['center']} p={[ '5px','10px', '20px']} overflow={'scroll'}>
        {imgArr.map((el , ind)=>{
          return <Image width={['100%']} maxW={['150px']} height={['60px' , '80px' ,'100px']} src={el} opacity={indexCount === ind ? 1 : .5} />
        })}
      </Flex>

    </Box>
  )
}


function Homepage() {

  const [moments, setMomemts] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const getMoments = () => {
    axios.get("https://sore-gold-bighorn-sheep-gear.cyclic.app/moments")
      .then((res) => setMomemts(res?.data?.data))
  }

  const getRecipes = () => {
    axios.get("https://sore-gold-bighorn-sheep-gear.cyclic.app/recipe")
      .then((res) => setRecipes(res?.data?.data))
  }


  useEffect(() => {
    getMoments();
    getRecipes();
  }, [])



  return (
    <>


    <Myslider />

      <div style={{marginTop:"200px"}}>
        <Box
          maxW={{ base: "90%", sm: "70%", lg: "70%" }}
          m={"auto"}
          cursor={"pointer"}
        >
          <Box boxShadow="xs">
            <Grid templateColumns="70% 30%">
              <Image
                w="100%"
                h="100%"
                src="https://www.kindmeal.my/photos/deal/6/670-4180-m.jpg"
                alt="deal-image"
                objectFit="full"
              />
              <Image
                w="100%"
                h="100%"
                src="https://www.kindmeal.my/photos/shop/4/467-3019-m.jpg"
                alt="deal-image"
                objectFit="full"
              />
            </Grid>
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                sm: "repeat(3, 1fr)",
                md: "repeat(6, 1fr)",
              }}
              gap={3}
              p={3}
              boxShadow="xs"
            >
              <Image
                src="https://www.kindmeal.my/photos/deal/7/725-5225-m.jpg"
                alt=""
              />
              <Image
                src="https://www.kindmeal.my/photos/deal/5/591-3151-m.jpg"
                alt=""
              />
              <Image
                src="https://www.kindmeal.my/photos/deal/6/698-4639-m.jpg"
                alt=""
              />
              <Image
                src="https://www.kindmeal.my/photos/deal/7/718-5090-m.jpg"
                alt=""
              />
              <Image
                src="https://www.kindmeal.my/photos/deal/6/685-4392-m.jpg"
                alt=""
              />
              <Image
                src="https://www.kindmeal.my/photos/deal/6/642-3775-m.jpg"
                alt=""
              />
            </Grid>
          </Box>
          <br />
          <br />
          {/* yumilicious moments */}
          <Box
            boxShadow="xs"
            maxW={{ base: "100%", sm: "100%", lg: "100%" }}
            p={4}
          >
            <Flex w="98%" m="auto">
              <Text fontSize={{ base: "sm", sm: "sm", lg: "2xl" }}>
                <Link to="/moments"> Yummylicious Moments</Link>
              </Text>
              <Spacer />
              <Flex gap={{ base: "1", sm: "4" }}>
                <Text
                  fontSize={{ base: "xs", sm: "xs", md: "md", lg: "md" }}
                  color={"blue.600"}
                >
                  <Link> -Secret Recipes </Link>
                </Text>
                <Text
                  fontSize={{ base: "xs", sm: "xs", md: "md", lg: "md" }}
                  color={"blue.600"}
                >
                  <Link> - Member Hot Picks  </Link>
                </Text>
                <Text
                  fontSize={{ base: "xs", sm: "xs", md: "md", lg: "md" }}
                  color={"blue.600"}
                >
                  <Link> -  Photo Moments </Link>
                </Text>
              </Flex>
            </Flex>
            <HomeContent data={moments} />
          </Box>
          <br />
          {/* Discover Recipes */}
          <Box
            boxShadow="xs"
            maxW={{ base: "100%", sm: "100%", lg: "100%" }}
            p={4}
          >
            <Flex w="98%" m="auto">
              <Text fontSize={{ base: "sm", sm: "sm", lg: "2xl" }}>
                <Link to="/moments"> Discover Recipes</Link>
              </Text>
              <Spacer />
              <Flex gap={{ base: "1", sm: "4" }}>
                <Text
                  fontSize={{ base: "xs", sm: "xs", md: "md", lg: "md" }}
                  color={"blue.600"}
                >
                  <Link> -Secret Recipes </Link>
                </Text>
                <Text
                  fontSize={{ base: "xs", sm: "xs", md: "md", lg: "md" }}
                  color={"blue.600"}
                >
                  <Link> - Restaurant Menu  </Link>
                </Text>
                <Text
                  fontSize={{ base: "xs", sm: "xs", md: "md", lg: "md" }}
                  color={"blue.600"}
                >
                  <Link> -  Photo Moments </Link>
                </Text>
              </Flex>
            </Flex>
            <HomeContent data={recipes} />
          </Box>
          <br />
        </Box>
        <br />
        {/* bottom part */}
        <Box boxShadow="xs" bgColor={"whiteAlpha.900"}>
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
      </div>
    </>
  );
}

export default Homepage;
