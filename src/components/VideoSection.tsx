import { Flex } from '@chakra-ui/react'

export const VideoSection = (): JSX.Element => {
  return (
    <>
      <Flex position={'fixed'}  minH={'100%'} minW={'100%'} right={0} bottom={0}>
        <video height={'100%'} width={'100%'} autoPlay muted loop>
          <source src="https://www.youtube.com/shorts/ttuKeS5k4Uo" type="video/mp4"/>
        </video>
      </Flex>
      {/* <video height={'100%'} width={'100%'} autoPlay muted loop>
        <source src="https://www.youtube.com/shorts/ttuKeS5k4Uo" type="video/mp4"/>
      </video> */}
    </>
  )
}
