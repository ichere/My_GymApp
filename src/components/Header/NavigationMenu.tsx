import { Box, Divider, Flex } from '@chakra-ui/react';

import { COLORS } from '../../constants/colors';

import CustomLink from '../CustomLink';
import { LargeBtn } from '../LargeBtn';

const NavigationMenu = (): JSX.Element => {
  return (
    <Flex
      position="fixed"
      left="0"
      right="0"
      zIndex={1000}
      bg={COLORS.white}
      direction="column"
      align="center"
      gap="1rem"
      py="3rem"
      fontSize="1.6rem"
      shadow="md"
    >
      <CustomLink route="#" text="Home" />
      <CustomLink route="#" text="Training" />
      <CustomLink route="#" text="Facilities" />
      <CustomLink route="#" text="Amenities" />
      <CustomLink route="#" text="Join" />
      <CustomLink route="#" text="Blog" />
      <CustomLink route="#" text="Gallery" />
      <CustomLink route="#" text="Merch" />
      <CustomLink route="#" text="About" />

    </Flex>
  );
};

export default NavigationMenu;
