import React from "react";
import {
  chakra,
  HStack,
  Flex,
  useColorModeValue,
  useDisclosure,
  Spacer,
} from "@chakra-ui/react";

import HButtons from "./HNavButtons";
import VButtons from "./VNavButtons";
import AlienHead from "../AlienHead";
import { ToggleButton } from "./NavButton";

const HeaderNav = () => {
  // const isActive = router.pathname === '/'
  const backGround = useColorModeValue("gray.300", "gray.900");
  const mobileNav = useDisclosure();

  return (
    <chakra.header
      mt={3}
      alignSelf="center"
      w="97%"
      bg={backGround}
      px={{ base: 2, sm: 4 }}
      py={4}
      shadow="md"
      key="headernav-key"
    >
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <HStack display="flex" spacing={3} alignItems="center">
          {/* vertical/horizonal buttons displayed based on screen size */}
          <VButtons mobileNav={mobileNav} />
          <AlienHead
            boxSize="65"
            aria-label="Open menu"
            onClick={mobileNav.onOpen}
          />
          <HButtons />
        </HStack>
        <Spacer />
        <ToggleButton />
        <HStack
          spacing={3}
          display={mobileNav.isOpen ? "none" : "flex"}
          alignItems="center"
        />
      </Flex>
    </chakra.header>
  );
};

export default HeaderNav;
