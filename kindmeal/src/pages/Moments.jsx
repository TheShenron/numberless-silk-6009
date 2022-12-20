import React, { useEffect, useState } from 'react';

import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Divider, Flex, Heading, Icon, IconButton, Image, Input, Select, Spacer, Stack, Text } from '@chakra-ui/react'

import { FcSearch } from 'react-icons/fc'
import { FcNext } from 'react-icons/fc'
import { FcLike } from 'react-icons/fc'
import { FcMultipleCameras } from 'react-icons/fc'
import { FcSms } from 'react-icons/fc'
import axios from 'axios'


const Cards = ({ el , uel } ) => {

    const { image, description} = el
   
    const {image:{avatar} , name , location} = uel

    
    return (
        <>
            <Card w={['100%', '100%', '48%', '32%']} maxW={['100%', '100%', '50%', '34%']} flexGrow='1'>
                <CardHeader p='2'>
                    <Flex spacing='4'>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Avatar name='' bg='gray.200' src={avatar}/>

                            <Box>
                                <Heading size='sm'>{name}</Heading>
                                <Text>{location}</Text>
                            </Box>
                        </Flex>
                        <IconButton
                            variant='ghost'
                            colorScheme='gray'
                            aria-label='See menu'
                            icon={<FcNext />}
                        />
                    </Flex>
                </CardHeader>
                <Image
                    objectFit='cover'
                    src={image}
                    alt='Chakra UI'
                />

                <Flex justifyContent={['center']} gap={['4']} my={['3']}>
                    <Flex color='gray' gap='1' alignItems={['center']}> <Icon as={FcLike} fontSize='20px' /> 1 </Flex>
                    <Flex color='gray' gap='1' alignItems={['center']}> <Icon as={FcMultipleCameras} fontSize='20px' /> 1 </Flex>
                    <Flex color='gray' gap='1' alignItems={['center']}> <Icon as={FcSms} fontSize='20px' /> 1 </Flex>

                </Flex>

                <CardBody borderBottom='1px' borderColor='gray.100' p='3'>
                    <Text fontSize={['sm']} py='0'>
                        {description}
                    </Text>
                </CardBody>

                <CardHeader p='2'>
                    <Flex spacing='4'>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Avatar borderRadius={'0'} name='' bg='gray.200' />
                            <Box>
                                <Heading size='xs'>Segun Adebayo</Heading>
                                <Text color='gray' fontSize='xs'>Creator, Chakra UI</Text>
                            </Box>
                        </Flex>
                    </Flex>
                </CardHeader>

            </Card>
        </>
    )
}


const Pagination = (len) => {
    const Arr = new Array(len).fill(0)
    const pages = []

    Arr.forEach((_, ind) => {
        pages.push(<Button key={ind + "nations"} size='sm'>{ind + 1}</Button>)
    })

    return pages
}



function Moments(props) {

    const [moments, setMoment] = useState([])
    const [user, setUser] = useState([])

    useEffect(() => {

        axios.get('https://sore-gold-bighorn-sheep-gear.cyclic.app/moments')
            .then((d) => {
                setMoment(d.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                console.log("Geting moments done")
            })

        axios.get('https://sore-gold-bighorn-sheep-gear.cyclic.app/user')
            .then((d) => {
                setUser(d.data.data)
            })
            .catch(err => {
                console.log(err)
            })


    }, [])





    return (
        <>
            <Box bg='#F0F0F0'>

                <Box width={['95%', '95%', '95%', '80%']} m='auto' py={['25px']}>

                    <Flex fontWeight='500' fontSize={['22px', '2xl']} gap={['0', '0', '20px']} flexDirection={['column', 'column', 'row']}>
                        <Text>KindMoments</Text>
                        <Text textColor='gray.500' display={['none', 'none', 'block']}>|</Text>
                        <Text textColor='gray.500'>Saving Lives with Yummy Photos</Text>
                    </Flex>

                    <Text fontSize='sm' my={['20px']} w={['100%', '90%', '75%', '65%']} fontWeight={['500', '600']}>
                        Discover new, delicious meat-free cuisines enjoyed by other compassionate food lovers. Share your interesting KindMoments, and build your own fans and followers to encourage kind, healthy meals.
                    </Text>

                    <Text fontSize='sm' my={['20px']} w={['100%', '90%', '75%', '65%']} fontWeight={['500', '600']}>
                        Download our <Text as='span' textColor='blue'> mobile app </Text> to easily showcase your masterpieces and interact with food lovers.
                    </Text>

                    <Text fontSize='sm' my={['20px']} w={['100%', '90%', '75%', '65%']} fontWeight={['500', '600']}>
                        Get started sharing your tasty moments now.
                    </Text>

                </Box>

            </Box>

            <Box width={['95%', '95%', '95%', '80%']} m='auto' py={['40px', '50px']}>

                <Stack direction={['column-reverse', 'column-reverse', 'row']} spacing={[2, 3, 4]} align={['start', 'center']}>
                    <Flex flexDirection={['row']} gap={[4]}>
                        <Button colorScheme='blackAlpha' size={['sm', 'sm', 'md']} borderRadius={['0', 'base']}>
                            Moments
                        </Button >

                        <Button colorScheme='blackAlpha' size={['sm', 'sm', 'md']} borderRadius={['0', 'base']}>
                            Deal Reviews
                        </Button>
                    </Flex>

                    <Spacer />

                    <Flex flexDirection={['row']} gap={['1', '2', '4']}>
                        <Input htmlSize={[20]} width='auto' placeholder='Search user or Shop' size={['sm', 'sm', 'md']} />

                        <Select placeholder='Select country' w={100} size={['sm', 'sm', 'md']}>
                            <option>United Arab Emirates</option>
                            <option>Nigeria</option>
                        </Select>

                        <Button display={['none', 'block']} colorScheme='red' size={['sm', 'sm', 'md']}>
                            Search
                        </Button>
                        <Button size={'sm'} display={['block', 'none']} colorScheme='twitter'>
                            <Icon color={['red']} as={FcSearch} />
                        </Button>
                    </Flex>


                </Stack>

            </Box>

            <Flex width={['95%', '95%', '95%', '80%']} m='auto' flexWrap={'wrap'} gap={['20px', '15px', '20px']}>

                {moments.length !== 0 && user.length !== 0 && moments.map((el, ind) => {
                    return user.map((uel)=>{
                        // console.log(uel)
                        if(uel.id == el.id){
                            return <Cards el={el} key={ind + "moments"} uel={uel} />
                        }
                        
                    })
                    
                })}

            </Flex>

            <Flex width={['95%', '95%', '95%', '80%']} m='auto' py={['20px', '30px']} gap={['5px', '10px']} alignItems={['center']}>

                <Text fontWeight='400'>Page:</Text>
                {Pagination(5)}

            </Flex>


        </>
    );
}

export default Moments;