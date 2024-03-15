import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react"
import { COLORS } from "../constants/colors"
import turfPic1 from './../assets/images/turf1.webp'
import turfPic2 from './../assets/images/turrf.webp'


export const TurfSection = () => {
  return (
    <Box padding={['2rem', '3rem', '0rem 5rem']} data-aos="fade-up" mt={['4rem', '4rem', '8rem']}>
       <Flex
            width={'100%'}
            flexDirection={['column-reverse', 'column-reverse', 'row']}
            alignItems={'center'}
            justify={['space-between']}
       >
            <Flex w={['100%', '45%', '50%']} >
                <Img src={turfPic1} width={['45%']} height={['50%']} alt="gym user" />
                <Img src={turfPic2} width={['', '', '45%']} height={['', '', '50%']} mt={['', '', '10rem']} alt="gym user" />
            </Flex>
            <Box maxW={['100%', '50rem']} position="relative" textAlign={['center', 'center', 'center']}>
                <Heading
                    as="h6"
                    fontSize={['1.8rem', '1.8rem', '5.2rem']}
                    fontWeight={600}
                    maxW={['20rem', '25rem', '100%']}
                    transform={['translate(30%)', 'translate(40%)', 'translate(0%)']}
                    color={COLORS.black}
                    textAlign={['left']}
                >
                    TURF ZONE
                </Heading>
                <Text
                    color={COLORS.black}
                    fontSize={['1.2rem', '1.2rem', '1.6rem']}
                    lineHeight={'1.6rem'}
                    marginTop={'1.6rem'}
                    align={'left'}
                >
                   The perfect place to knock out those athletic workouts, take content, and use the TANK.
                </Text>
            </Box>
        </Flex> 
    </Box>
  )
}
