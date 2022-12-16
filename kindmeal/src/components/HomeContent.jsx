import { Box, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'

const HomeContent = () => {
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
            {new Array(6).fill(" ").map((el) => (
              <Box>
                <Image
                w="100%"
                h={200}
                  src="https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/127853511_500056460971216_6625358320206453732_n.jpg?stp=dst-jpg_s720x720&_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=8xFLDbsZy64AX-IZqgQ&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfDL8T5A6kZEss4GseMsHpYkO2Od1-XXqxgnNpPoSfwWTQ&oe=63A17551"
                  alt=""
                />
                <Text fontSize='xs'>Purple Cane Tea Restaurant @ The Gardens</Text>
              </Box>
            ))}
          </Grid>
    </div>
  )
}

export default HomeContent
