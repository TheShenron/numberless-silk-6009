import { Box, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const HomeContent = ({data}) => {
  return (
    <div>
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(6, 1fr)",
              lg: "repeat(6, 1fr)",
            }}
            gap={3}
            p={3}
          >
            {
            data?.slice(0,6)?.map((el) => (
             <Link to={`/moments/${el.id}`}> <Box key={el.dateOfCreated}> 
                <Image
                w="100%"
                h={200}
                  src={el.image}
                  alt=""
                />
                <Text fontSize='xs'>{el.title}</Text>
              </Box></Link>
            ))}
          </Grid>
    </div>
  )
}

export default HomeContent
