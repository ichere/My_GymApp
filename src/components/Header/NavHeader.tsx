import { Box, Flex, Link, Text } from "@chakra-ui/react"
import { LANDING_PARAGRAPH_FONT } from "../../constants/appConstants"
import { BsInstagram, BsTiktok } from "react-icons/bs"
import { COLORS } from "../../constants/colors"
import { FaFacebook } from "react-icons/fa"
import { LargeBtn } from "../LargeBtn"


export const NavHeader = () => {
  const handleSubmit = () => {
    // navigate(UNAUTHENTICATED_ROUTES.login);
  };
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
          justifyContent={'space-between'}
        >
          <Flex
            flexDirection={['column', 'column', 'row']}
            justify={'space-between'}
            gap={'1rem'}
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
          <Flex justify={'space-between'} alignItems={'center'} gap={'.5rem'}>
            <BsTiktok color={COLORS.instagramBlue} />
            <BsInstagram color={COLORS.instagramBlue} />
            <FaFacebook color={COLORS.facebookBlue} />
          </Flex>
        </Flex>
        <Flex>
          <Box width={['7.5rem', '12rem', '15rem']}>
            <LargeBtn
              bg={''}
              color={COLORS.black}
              text={'JOIN NOW'}
              loading={false}
              handleSubmit={handleSubmit}
            />
          </Box>
          <Box width={['7.5rem', '12rem', '15rem']}>
            <LargeBtn
              bg={''}
              color={COLORS.black}
              text={'FREE PASS'}
              loading={false}
              handleSubmit={handleSubmit}
            />
          </Box>
        </Flex>
      </Flex>
    </>
  )
}
