import { Flex } from '@chakra-ui/react'

export const VideoSection = (): JSX.Element => {
  return (
    <>
      <Flex  minH={'100vh'} minW={'100vw'} >
        <video  width={'100%'} controls autoPlay muted>
          <source src="https://www.youtube.com/shorts/ttuKeS5k4Uo" type="video/mp4"/>
        </video>
      </Flex>
      {/* <video controls height={'100%'} width={'100%'} autoPlay muted loop>
        <source src="https://www.youtube.com/shorts/ttuKeS5k4Uo" type="video/mp4"/>
      </video> */}
    </>
  )
}
