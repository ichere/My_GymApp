import { Box, Flex, Link, Text } from "@chakra-ui/react"
import { LANDING_PARAGRAPH_FONT } from "../../constants/appConstants"


export const NavHeader = () => {
  return (
    <>
      <Flex
        flexDirection={['column', 'column', 'row']}
        justifyContent={'space-between'}
        padding={'1.2rem 4rem'}
        align="center"
        position={'fixed'}
        top={0}
        width={'100%'}
        backgroundColor={'#FFFFFF'}
        zIndex={10}
        boxShadow={'md'}
      >
        <Box>
          <Text>LOGO</Text>
        </Box>
        <Flex
          flexDirection={['column', 'column', 'row']}
          justifyContent={'space-around'}
        >
          <Link fontSize={LANDING_PARAGRAPH_FONT}>Home</Link>
          <Link fontSize={LANDING_PARAGRAPH_FONT}>Training</Link>
          <Link fontSize={LANDING_PARAGRAPH_FONT}>Facilities</Link>
          <Link fontSize={LANDING_PARAGRAPH_FONT}>Amenities</Link>
          <Link fontSize={LANDING_PARAGRAPH_FONT}>Join</Link>
          <Link fontSize={LANDING_PARAGRAPH_FONT}>Blog</Link>
          <Link fontSize={LANDING_PARAGRAPH_FONT}>Gallery</Link>
          <Link fontSize={LANDING_PARAGRAPH_FONT}>Merch</Link>
          <Link fontSize={LANDING_PARAGRAPH_FONT}>About</Link>
        </Flex>
      </Flex>
    </>
  )
}
