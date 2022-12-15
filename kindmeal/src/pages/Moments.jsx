import React from 'react';

import { Box, Button, Center, Divider, Flex, Input, Select, Spacer, Stack, Text } from '@chakra-ui/react'

function Moments(props) {
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

            <Box width={['95%', '95%', '95%', '80%']} m='auto' py={['50px']}>

                <Stack direction='row' spacing={4} align='center'>
                    <Button colorScheme='blackAlpha' size={['sm' , 'md']}>
                        Moments
                    </Button >

                    <Button colorScheme='blackAlpha'>
                        Deal Reviews
                    </Button>

                    <Spacer />

                    <Input htmlSize={20} width='auto' placeholder='Search user or Shop'/>

                    <Select placeholder='Select country' w={100}>
                        <option>United Arab Emirates</option>
                        <option>Nigeria</option>
                    </Select>

                    <Button colorScheme='red'>
                        Search
                    </Button>
                </Stack>



            </Box>
        </>
    );
}

export default Moments;