import { Box, Flex, Heading, Img, Text } from '@chakra-ui/react'
import GymPic from './../assets/images/gym1.webp'
import { COLORS } from '../constants/colors'
import { LargeBtn } from './LargeBtn'

export const CouponSection = () => {
  return (
    <Box padding={['2rem', '3rem', '0rem 5rem']} data-aos="fade-up" mt={['4rem', '4rem', '8rem']}>
       <Flex
        width={'100%'}
        flexDirection={['column-reverse', 'column-reverse', 'row']}
        alignItems={'center'}
        justify={['space-between']}
       >
            <Box maxW={['100%', '50rem']} position="relative" textAlign={['center', 'center', 'left']}>
                <Heading
                    as="h6"
                    // marginBottom={'2rem'}
                    fontSize={['1.8rem', '1.8rem', '5.2rem']}
                    fontWeight={400}
                    maxW={['20rem', '25rem', '100%']}
                    transform={['translate(30%)', 'translate(40%)', 'translate(0%)']}
                    color={COLORS.black}
                    textAlign={['left']}
                >
                    EXPERT
                </Heading>
                <Heading
                    as="h6"
                    // marginBottom={'2rem'}
                    fontSize={['1.8rem', '1.8rem', '5.2rem']}
                    fontWeight={400}
                    maxW={['20rem', '25rem', '100%']}
                    transform={['translate(30%)', 'translate(40%)', 'translate(0%)']}
                    color={COLORS.black}
                    textAlign={['left']}
                >
                    PERSONAL
                </Heading>
                <Heading
                    as="h6"
                    // marginBottom={'2rem'}
                    fontSize={['1.8rem', '1.8rem', '5.2rem']}
                    fontWeight={400}
                    maxW={['20rem', '25rem', '100%']}
                    transform={['translate(30%)', 'translate(40%)', 'translate(0%)']}
                    color={COLORS.black}
                    textAlign={['left']}
                >
                    TRAINING
                </Heading>
                <Text
                    color={COLORS.black}
                    fontSize={['1.2rem', '1.2rem', '1.6rem']}
                    lineHeight={'1.6rem'}
                    marginTop={'1.6rem'}
                >
                    FITNESS nGO Gyms has the best personal training program in the Port Saint Lucie area. Our certified personal trainers are experts in their craft. We create the perfect programs to help you reach your goals. Everything begins with our energy and figuring out how to evolve that, then the journey begins.
                </Text>
                <Flex width="100%" justify={['center', 'center', 'start']} marginTop={'2rem'}>
                    <Box width={['25rem']}>
                        <LargeBtn
                            bg={COLORS.yellow}
                            color={COLORS.black}
                            text={'Free Personal Training Coupon'}
                            loading={false}
                            h={['4rem']}
                            // handleSubmit={handleSubmit}
                        />
                    </Box>
                </Flex>
            </Box>
            <Box w={['100%', '45%', '50%']} display={['block', 'block', 'block']}>
                <Img src={GymPic} width={['70%']} height={['70%']} alt="gym user" />
            </Box>
        </Flex> 
    </Box>
  )
}
