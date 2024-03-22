import { Flex, Link, Text } from "@chakra-ui/react"
import { LANDING_PARAGRAPH_FONT } from "../constants/appConstants"


export const FooterSection = () => {
  return (
    <Flex
        width="100%"
        align={['start', 'start', 'center']}
        direction={['column', 'column', 'row']}
        justifyContent={'space-between'}
        fontSize={['1.6rem', '1.6rem', '2.5rem']}
        padding={['2rem', '2rem', '6rem', '6rem 20rem']}
    >
       <Flex
        align={['center', 'center', 'start']}
        direction={'column'}
       >
            <Text
            >LOGO</Text>
            <Flex
                justifyContent={'space-around'}
            >
                <Link fontSize={LANDING_PARAGRAPH_FONT}>Careers</Link>
                <Link fontSize={LANDING_PARAGRAPH_FONT}>Customer Service</Link>
                <Link fontSize={LANDING_PARAGRAPH_FONT}>Corporate Wellness</Link>
            </Flex>
            <Flex
                justifyContent={'space-around'}
            >
                <Link fontSize={LANDING_PARAGRAPH_FONT}>Terms of use</Link>
                <Link fontSize={LANDING_PARAGRAPH_FONT}>Privacy Policy</Link>
                <Link fontSize={LANDING_PARAGRAPH_FONT}>FAQ</Link>
            </Flex>
            <Flex>
                <Text>© 2022-2024 FITNESS nGO</Text>
            </Flex>
            
        </Flex> 
       <Flex></Flex> 
    </Flex>
  )
}
