import React from 'react';
import { ModalBody, ModalHeader, Text, Image, Button, RadioGroup, Radio, } from "@chakra-ui/react";
import {
    Flex,
    FormLabel,
    Input,
    Stack,
  
} from '@chakra-ui/react';


function JoinUser({ setStep }) {

    const [value, setValue] = React.useState('1')

    return (
        <>

            <ModalHeader
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                mt={5}
            >
                <Image width={"70%"} src={"https://www.kindmeal.my/images/logo-kindmeal.png"} />
                <Text fontSize={'sm'} color="#666666">Food Lover? Sign Up Now or Login With Facebook</Text>
            </ModalHeader>

            <ModalBody >

                <Flex
                    align={'center'}
                    justify={'center'}
                >
                    <Stack
                        w={'full'}
                        p='0 10px 10px 10px'
                    >

                        <Flex alignItems={'center'} gap='10px'>
                            <FormLabel p='0' fontSize={'sm'}>
                                <Text width={'100px'} >Your Name</Text>
                            </FormLabel>
                            <Input
                                placeholder="First "
                                _placeholder={{ color: 'gray.500' }}
                                type="text"
                                size={'sm'}
                            />
                            <Input
                                placeholder="Last"
                                _placeholder={{ color: 'gray.500' }}
                                type="text"
                                size={'sm'}
                            />
                        </Flex>

                        <Flex alignItems={'center'} gap='10px'>
                            <FormLabel p='0' fontSize={'sm'}>
                                <Text width={'100px'} >Email</Text>
                            </FormLabel>
                            <Input
                                placeholder="xyz@gmail.com "
                                _placeholder={{ color: 'gray.500' }}
                                type="email"
                                size={'sm'}
                            />
                        </Flex>
                        <Flex alignItems={'center'} gap='10px'>
                            <FormLabel p='0' fontSize={'sm'}>
                                <Text width={'100px'} > Password</Text>
                            </FormLabel>
                            <Input
                                placeholder="1#edFG67*"
                                _placeholder={{ color: 'gray.500' }}
                                type="password"
                                size={'sm'}
                            />
                        </Flex>
                        <Flex alignItems={'center'} gap='10px'>
                            <FormLabel p='0' fontSize={'sm'}>
                                <Text width={'100px'} > Username</Text>
                            </FormLabel>
                            <Input
                                placeholder="http://KindMeal.my/Username"
                                _placeholder={{ color: 'gray.500' }}
                                type="password"
                                size={'sm'}
                            />
                        </Flex>
                        <Flex alignItems={'center'} gap='10px'>
                            <FormLabel p='0' fontSize={'sm'}>
                                <Text width={'100px'} > Birth Date</Text>
                            </FormLabel>
                            <Input
                                placeholder="http://KindMeal.my/Username"
                                _placeholder={{ color: 'gray.500' }}
                                type="datetime-local"
                                size={'sm'}
                            />
                        </Flex>
                        <Flex alignItems={'center'} gap='10px'>
                            <FormLabel p='0' fontSize={'sm'}>
                                <Text width={'100px'} > Contary</Text>
                            </FormLabel>
                            <Input
                                placeholder="Malaysia"
                                _placeholder={{ color: 'gray.500' }}
                                type="text"
                                size={'sm'}
                            />
                        </Flex>
                        <Flex alignItems={'center'} gap='10px'>
                            <FormLabel p='0' fontSize={'sm'}>
                                <Text width={'100px'} > State</Text>
                            </FormLabel>
                            <Input
                                placeholder="Enter State"
                                _placeholder={{ color: 'gray.500' }}
                                type="text"
                                size={'sm'}
                            />
                        </Flex>
                        <Flex alignItems={'center'} gap='10px'>
                            <FormLabel p='0' fontSize={'sm'}>
                                <Text width={'100px'} > Gender</Text>
                            </FormLabel>
                            <RadioGroup onChange={setValue} value={value}>
                                <Stack direction='row'>
                                    <Radio value='1'>Male</Radio>
                                    <Radio value='2'>Female</Radio>
                                </Stack>
                            </RadioGroup>
                        </Flex>

                        <Stack spacing={6} direction={['column', 'row']}>
                        <Button
                                colorScheme={'blue'}
                                variant='outline'
                                marginLeft={'auto'}
                                onClick={()=>setStep(0)}
                                >
                                back
                            </Button>
                            <Button
                                colorScheme={'red'}
                                marginLeft={'auto'}
                                >
                                Join
                            </Button>
                        </Stack>
                    </Stack>
                </Flex>



            </ModalBody>



        </>
    );
}

export default JoinUser;