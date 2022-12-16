import { Image } from "@chakra-ui/image";
import { Box, Center, Flex, Grid, Spacer, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import HomeContent from "../components/HomeContent";

function Homepage() {
  return (
    <div>
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
        {/* latest news and videos */}
        <Box
          boxShadow="xs"
          maxW={{ base: "100%", sm: "100%", lg: "100%" }}
          p={4}
        >
          <Flex w="98%" m="auto">
            <Text fontSize={{ base: "sm", sm: "sm", lg: "2xl" }}>
              Latest News & Videos
            </Text>
            <Spacer />
            <Flex gap={{ base: "1", sm: "4" }}>
              <Text
                fontSize={{ base: "xs", sm: "xs", md: "md", lg: "md" }}
                color={"blue.600"}
              >
                <Link> -Save Lives with Your Blog </Link>
              </Text>
              <Text
                fontSize={{ base: "xs", sm: "xs", md: "md", lg: "md" }}
                color={"blue.600"}
              >
                <Link> -News & Articles </Link>
              </Text>
              <Text
                fontSize={{ base: "xs", sm: "xs", md: "md", lg: "md" }}
                color={"blue.600"}
              >
                <Link> -Follow Our Facebook </Link>
              </Text>
            </Flex>
          </Flex>
          <HomeContent />
        </Box>
      </Box>
      <br />
      {/* bottom part */}
      <Box boxShadow="xs" bgColor={"whiteAlpha.900"}>
        <Box maxW={{ base: "100%", sm: "100%", lg: "70%" }} m="auto" p={10}>
          <Center>
            <Text
              fontSize={{ base: "sm", sm: "sm", md: "2xl", lg: "3xl" }}
              color={"gray.700"}
            >
              Introducing Malaysia's Pioneering Meat-Free Lifestyle Platform
            </Text>
          </Center>
          <br />
          <Flex justifyContent={"center"} alignItems="center" gap={5}>
            <Text>Brought to you by</Text>
            <Image
              w="300px"
              h="60px"
              src="https://www.kindmeal.my/images/logo-petfinder-v2.png"
              alt="logo-petfinder"
            />
          </Flex>
          <br />
          <Center>
            <Text
              color={"gray.400"}
              fontSize={{ base: "sm", sm: "sm", md: "xl", lg: "xl" }}
            >
              Instant coupon & dining. No upfront coupon payment, booking or
              printing.
            </Text>
          </Center>
        </Box>
        {/* deals and offers  */}
        <Box maxW={{ base: "90%", sm: "90%", md: "90%", lg: "70%" }} m="auto">
          <Grid templateColumns={{base:"repeat(2,1fr)",sm:"repeat(2,1fr)",md:"repeat(4,1fr)",lg:"repeat(4,1fr)"}} gap={4}>
            <Box boxShadow="dark-lg" p={5} borderRadius="10px">
              <Center>
                {" "}
                <Image
                  src="https://www.kindmeal.my/images/intro_deal.png"
                  mb="4px"
                />
              </Center>
              <Center>
                {" "}
                <Text fontSize={{ base: "sm", sm: "sm", md: "xl", lg: "xl" }}>
                  Get Great Deals
                </Text>{" "}
              </Center>
              <Center>
                {" "}
                <Text fontSize="sm">
                  Show our FREE digital coupons to instantly enjoy exciting
                  deals
                </Text>{" "}
              </Center>
            </Box>
            <Box boxShadow="dark-lg" p={5} borderRadius="10px">
              <Center>
                {" "}
                <Image
                  src="	https://www.kindmeal.my/images/intro_kindmoment.png"
                  mb="4px"
                />
              </Center>
              <Center>
                {" "}
                <Text fontSize={{ base: "sm", sm: "sm", md: "xl", lg: "xl" }}>
                  Share KindMoments
                </Text>{" "}
              </Center>
              <Center>
                {" "}
                <Text fontSize="sm">
                  Spread the joy by sharing your yummy dining moments
                </Text>{" "}
              </Center>
            </Box>
            <Box boxShadow="dark-lg" p={5} borderRadius="10px">
              <Center>
                {" "}
                <Image
                  src="https://www.kindmeal.my/images/intro_menu.png"
                  mb="4px"
                />
              </Center>
              <Center>
                {" "}
                <Text fontSize={{ base: "sm", sm: "sm", md: "xl", lg: "xl" }}>
                  Discover Delicious Food
                </Text>{" "}
              </Center>
              <Center>
                {" "}
                <Text fontSize="sm">
                  Explore the latest exquisite offerings and creative menus
                </Text>{" "}
              </Center>
            </Box>
            <Box boxShadow="dark-lg" p={5} borderRadius="10px">
              <Center>
                {" "}
                <Image
                  src="https://www.kindmeal.my/images/intro_friends.png"
                  mb="4px"
                />
              </Center>
              <Center>
                {" "}
                <Text fontSize={{ base: "sm", sm: "sm", md: "xl", lg: "xl" }}>
                  Meet Food Lovers
                </Text>{" "}
              </Center>
              <Center>
                {" "}
                <Text fontSize="sm">
                  Make new, compassionate friends and share great food tips
                </Text>{" "}
              </Center>
            </Box>
          </Grid>
        </Box>
        <br />
        <br />
        {/* another info */}
        <Box maxW={{ base: "100%", sm: "100%", md: "70%", lg: "70%" }} m="auto">
          <Center>
            <Text
              fontSize={{ base: "sm", sm: "sm", md: "xl", lg: "xl" }}
              color={"gray.500"}
            >
              Any restaurant or cafe can join KindMeal, vegetarian or not, as
              long as the deals and menu featured are meat-free.
            </Text>
          </Center>
          <Center>
            <Text
              fontSize={{ base: "sm", sm: "sm", md: "xl", lg: "xl" }}
              color={"gray.500"}
            >
              Enjoy a great meat-free dining experience. Easily save animal
              lives, health, environment and money now!
            </Text>
          </Center>
        </Box>
        {/* join button */}
        <Flex justify={"center"} p="100px">
          <Button colorScheme="red" w="450px" h="90px" bgColor="red">
            <Text fontSize="2xl">Join Kindmeal Now</Text>
          </Button>
        </Flex>
        <Center> <Text fontSize="2xl" color={"gray.500"}>Featured On</Text></Center>
        <Center><Image src="https://www.kindmeal.my/images/media-feature2.png"/></Center>
        <Box bgColor="gray.300">
          <Center><Image src="https://www.kindmeal.my/images/banner_whykindmeal.png"/></Center>
        </Box>
      </Box>
    </div>
  );
}

export default Homepage;
