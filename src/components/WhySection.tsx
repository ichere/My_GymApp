import { Box, Flex, Heading, Img, Text } from '@chakra-ui/react'
import backgroundImage from './../assets/images/backgroundImg.webp'
import gymPic from './../assets/images/gym2.webp'
import { COLORS } from '../constants/colors'

export const WhySection = () => {
  return (
    <Box padding={['2rem', '3rem', '0rem 5rem']} backgroundImage={backgroundImage} data-aos="fade-up" mt={['4rem', '4rem', '8rem']}>
        <Flex
            width={'100%'}
            flexDirection={['column-reverse', 'column-reverse', 'row']}
            alignItems={'center'}
            justify={['space-between']}
        >
            <Box maxW={['100%', '50rem']} position="relative" textAlign={['center', 'center', 'left']}>
                <Flex
                    background={'rgba(0, 0, 0, 0.5)'}
                    position={'absolute'}
                >
                    <Heading
                        as="h6"
                        marginBottom={'2rem'}
                        fontSize={['1.8rem', '1.8rem', '5.2rem']}
                        fontWeight={400}
                        maxW={['20rem', '25rem', '100%']}
                        transform={['translate(30%)', 'translate(40%)', 'translate(0%)']}
                        color={COLORS.green}
                        textAlign={['left']}
                    >WHY</Heading>
                </Flex>
            </Box>
            <Box w={['100%', '45%', '50%']} display={['block', 'block', 'block']}>
             <Img src={gymPic} width={['70%']} height={['70%']} alt="gym user" />
            </Box>
        </Flex>
    </Box>
  )
}
