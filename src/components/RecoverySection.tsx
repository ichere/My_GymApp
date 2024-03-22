import { Box, Flex, Heading, Img, Text } from '@chakra-ui/react'
import recoveryPic from './../assets/images/recovery.webp'
import { COLORS } from '../constants/colors'

export const RecoverySection = () => {
  return (
    <Box padding={['2rem', '3rem', '0rem 5rem']} data-aos="fade-up" mt={['4rem', '4rem', '8rem']}>
       <Flex
            width={'100%'}
            flexDirection={['column-reverse', 'column-reverse', 'row']}
            alignItems={'center'}
            justify={['space-between']}
       >
            <Box maxW={['100%', '50rem']} mb={['3rem', '2.5rem', '5rem']} position="relative" textAlign={['center', 'center', 'center']}>
                <Heading
                    as="h6"
                    fontSize={['1.8rem', '1.8rem', '6.2rem']}
                    fontWeight={700}
                    maxW={['20rem', '25rem', '100%']}
                    transform={['translate(30%)', 'translate(40%)', 'translate(0%)']}
                    color={COLORS.black}
                    textAlign={['left']}
                >
                    THE. BEST.
                </Heading>
                <Heading
                    as="h6"
                    fontSize={['1.8rem', '1.8rem', '6.2rem']}
                    fontWeight={700}
                    maxW={['20rem', '25rem', '100%']}
                    transform={['translate(30%)', 'translate(40%)', 'translate(0%)']}
                    color={COLORS.black}
                    textAlign={['left']}
                >
                    RECOVERY.
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
            </Box>
            <Box w={['100%', '45%', '50%']} display={['block', 'block', 'block']}>
                <Img src={recoveryPic} width={['90%']} height={['70%']} alt="gym user" />
            </Box>
        </Flex> 
    </Box>
  )
}
