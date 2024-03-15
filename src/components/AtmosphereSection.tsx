import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react"
import { COLORS } from "../constants/colors"
import atmosPic from "./../assets/images/atmosphere.webp"
import { LargeBtn } from "./LargeBtn"


export const AtmosphereSection = () => {
  return (
    <Box padding={['2rem', '3rem', '0rem 5rem']} data-aos="fade-up" mt={['4rem', '4rem', '8rem']}>
       <Flex
            width={'100%'}
            flexDirection={['column-reverse', 'column-reverse', 'row']}
            alignItems={'center'}
            justify={['space-between']}
       >
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
                    ATMOSPHERE
                </Heading>
                <Text
                    color={COLORS.black}
                    fontSize={['1.2rem', '1.2rem', '1.6rem']}
                    lineHeight={'1.6rem'}
                    marginTop={'1.6rem'}
                    align={'left'}
                >
                 Cleanliness & Friendliness, Guaranteed. Fitness nGo carries the latest and greatest cardio and strength training equipment available, exciting nGo classes, Personal Training, Tanning, Cryo-Therapy, Hydromassage, Kids Club, and the greatest atmosphere in the city.
                </Text>
                <Flex width="100%" justify={['center', 'center', 'start']} marginTop={'2rem'}>
                    <Box width={['35rem']}>
                        <LargeBtn
                            bg={COLORS.yellow}
                            color={COLORS.black}
                            text={'Free Personal Training Coupon'}
                            loading={false}
                            h={['5rem']}
                        />
                    </Box>
                </Flex>
            </Box>
            <Box w={['100%', '45%', '50%']} display={['block', 'block', 'block']}>
                <Img src={atmosPic} width={['90%']} height={['70%']} alt="gym user" />
            </Box>
        </Flex> 
    </Box>
  )
}
