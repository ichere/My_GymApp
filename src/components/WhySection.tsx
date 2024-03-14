import { Box, Flex, Img, Text } from '@chakra-ui/react'
import backgroundImage from './../assets/images/backgroundImg.webp'
import gymPic from './../assets/images/gym2.webp'
import gymExp from './../assets/images/gymExperience.webp'
import checkImg from './../assets/images/check (1).webp'
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
            <Box w={['100%', '45%', '100%']} display={['block', 'block', 'block']}>
                <Img src={gymExp} width={['80%']} height={['50%']} alt="gym user" /> 
                <Flex 
                    align={'center'}
                    gap={'2rem'}
                >
                    <Box>
                        <Img src={checkImg} />
                    </Box>
                    <Text
                        color={COLORS.white}
                        position={'relative'}
                        fontWeight={500}
                        fontSize={['1.2rem', '1.2rem', '2.6rem']}
                        lineHeight={'1.6rem'}
                        marginTop={'1.6rem'}
                    >Super Clean</Text>
                </Flex>
                <Flex 
                    align={'center'}
                    gap={'2rem'}
                >
                    <Box>
                        <Img src={checkImg} />
                    </Box>
                    <Text
                        color={COLORS.white}
                        position={'relative'}
                        fontWeight={500}
                        fontSize={['1.2rem', '1.2rem', '2.6rem']}
                        lineHeight={'1.6rem'}
                        marginTop={'1.6rem'}
                    >Friendly Staff</Text>
                </Flex>
                <Flex 
                    align={'center'}
                    gap={'2rem'}
                >
                    <Box>
                        <Img src={checkImg} />
                    </Box>
                    <Text
                        color={COLORS.white}
                        position={'relative'}
                        fontWeight={500}
                        fontSize={['1.2rem', '1.2rem', '2.6rem']}
                        lineHeight={'1.6rem'}
                        marginTop={'1.6rem'}
                    >Workout & Recover</Text>
                </Flex>
                <Flex 
                    align={'center'}
                    gap={'2rem'}
                >
                    <Box>
                        <Img src={checkImg} />
                    </Box>
                    <Text
                        color={COLORS.white}
                        position={'relative'}
                        fontWeight={500}
                        fontSize={['1.2rem', '1.2rem', '2.6rem']}
                        lineHeight={'1.6rem'}
                        marginTop={'1.6rem'}
                    >Motivating Atmosphere</Text>
                </Flex>
                <Flex 
                    align={'center'}
                    gap={'2rem'}
                >
                    <Box>
                        <Img src={checkImg} />
                    </Box>
                    <Text
                        color={COLORS.white}
                        position={'relative'}
                        fontWeight={500}
                        fontSize={['1.2rem', '1.2rem', '2.6rem']}
                        lineHeight={'1.6rem'}
                        marginTop={'1.6rem'}
                    >Best Equipment</Text>
                </Flex>
            </Box>
            <Box w={['100%', '45%', '70%']} display={['block', 'block', 'block']}>
             <Img src={gymPic} width={['70%']} height={['70%']} alt="gym user" />
            </Box>
        </Flex>
    </Box>
  )
}
