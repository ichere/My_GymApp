import { Box, Flex, Text } from "@chakra-ui/react"
import backgroundImage from "./../assets/images/join.webp"
import { LargeBtn } from "./LargeBtn"
import { COLORS } from "../constants/colors"


export const JoinSection = () => {
  return (
    <Box padding={['2rem', '3rem', '0rem 5rem']} backgroundImage={backgroundImage} data-aos="fade-up" mt={['4rem', '4rem', '8rem']}>
        <Text
            color={COLORS.white}
            fontSize={['12rem']}
            fontWeight={700}
            align={'center'}
        >JOIN TODAY</Text>
       <Flex width="100%" justify={['center', 'center', 'center']} marginTop={'2rem'}>
            <Box width={['35rem']}>
                <LargeBtn
                    bg={COLORS.yellow}
                    color={COLORS.black}
                    text={'Free Pass'}
                    loading={false}
                    h={['5rem']}
                />
            </Box>
        </Flex> 
    </Box>
  )
}
