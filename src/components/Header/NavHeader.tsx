import { Box, Flex, Link, Text } from "@chakra-ui/react"
import { BUTTON_ICON_SIZE, LANDING_PARAGRAPH_FONT, TAB_BREAKPOINT } from "../../constants/appConstants"
import { BsInstagram, BsTiktok } from "react-icons/bs"
import { COLORS } from "../../constants/colors"
import { FaFacebook } from "react-icons/fa"
import { LargeBtn } from "../LargeBtn"
import { useState } from "react"
import NavigationMenu from "./NavigationMenu"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"


export const NavHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = () => {
    // navigate(UNAUTHENTICATED_ROUTES.login);
  };
  return (
    <>
      {window.innerWidth < TAB_BREAKPOINT ? (
        <>
          <Flex
            position="fixed"
            top="0"
            zIndex={100000}
            bg={COLORS.white}
            width="100%"
            p="2rem"
            flexDirection={'column'}
            shadow={!isOpen ? 'md' : 0}
          >
            <Flex
              // position="fixed"
              // top="0"
              // zIndex={100000}
              // bg={COLORS.white}
              // width="100%"
              justify="space-between"
              // p="2rem"
              // align="center"
              // shadow={!isOpen ? 'md' : 0}
            >
              <Box>
                <Text>LOGO</Text>
              </Box>
              {!isOpen ? (
                <GiHamburgerMenu size={BUTTON_ICON_SIZE} onClick={() => setIsOpen(true)} />
              ) : (
                <AiOutlineClose size={BUTTON_ICON_SIZE} onClick={() => setIsOpen(false)} />
              )}
            </Flex>
            <Flex align={'center'} gap={'1rem'}>
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
          {isOpen && <NavigationMenu />}
        </>
      ) : (
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
          justifyContent={'space-around'}
          gap={'1rem'}
          width={'100%'}
        >
          <Flex
            flexDirection={['column', 'column', 'row']}
            justify={'space-between'}
            gap={'1rem'}
            width={'80%'}
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
          <Flex justify={'space-between'} alignItems={'center'} gap={'1rem'}>
            <BsTiktok color={COLORS.instagramBlue} size={BUTTON_ICON_SIZE}/>
            <BsInstagram color={COLORS.instagramBlue} size={BUTTON_ICON_SIZE} />
            <FaFacebook color={COLORS.facebookBlue} size={BUTTON_ICON_SIZE} />
          </Flex>
        </Flex>
        <Flex justify={'space-between'} align={'center'} gap={'1rem'}>
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
      )}
    </>
  )
}
