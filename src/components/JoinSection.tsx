import { Box, Flex, Heading } from "@chakra-ui/react"
import backgroundImage from "./../assets/images/join.webp"
import { LargeBtn } from "./LargeBtn"
import { COLORS } from "../constants/colors"


export const JoinSection = () => {
  return (
    <Box padding={['2rem', '3rem', '0rem 5rem']} backgroundSize={'100% 100%'} background={'rgba(0, 0, 0, 0.5)'} backgroundPosition={'center'}  backgroundImage={backgroundImage} backgroundRepeat={'no-repeat'} data-aos="fade-up" mt={['4rem', '4rem', '8rem']}>
        <Heading
            as={'h6'}
            color={COLORS.white}
            fontSize={['6rem', '6.5rem', '12rem']}
            fontWeight={[100, 500, 700]}
            textAlign={'center'}
        >JOIN TODAY</Heading>
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
