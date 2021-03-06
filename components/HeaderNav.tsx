import React from "react";
import NextLink from "next/link";
import {
  chakra,
  HStack,
  Box,
  Flex,
  IconButton,
  useColorModeValue,
  useColorMode,
  useDisclosure,
  CloseButton,
  VStack,
  Button,
  Spacer,
  ButtonGroup
} from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { BsFillImageFill } from "react-icons/bs";
import { FaMoon, FaSun, FaSatelliteDish } from 'react-icons/fa';
import { GiEarthAmerica } from 'react-icons/gi';
import HeaderButton from './HeaderButton';
import AlienHead from "./AlienHead";

const HeaderNav = () => {
  // const isActive = router.pathname === '/'
  const { colorMode, toggleColorMode } = useColorMode();
  const backGround = useColorModeValue("gray.300", "gray.900");
  const mobileNav = useDisclosure();

  return (
    <chakra.header
      w="full"
      bg={backGround}
      px={{ base: 2, sm: 4 }}
      py={4}
      shadow="md"
      key="headernav-key"
    >
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <HStack display="flex" spacing={3} alignItems="center">
          <Box display={{ base: "inline-flex", md: "none" }}>
            <VStack
              pos="absolute"
              zIndex="dropdown"
              top={0}
              left={0}
              right={0}
              display={mobileNav.isOpen ? "flex" : "none"}
              flexDirection="column"
              pt={5}
              bg={backGround}
              spacing={3}
              rounded="sm"
              shadow="sm"
            >
              <CloseButton
                mb={5}
                aria-label="Close menu"
                onClick={mobileNav.onClose}
              />
              <NextLink href="/">
                <Button 
                  w="full"
                  size="lg"
                  variant="ghost" 
                  leftIcon={<AiFillHome />}
                >
                  Home
                </Button>
              </NextLink>
              <NextLink href="/apod">
                <Button
                  w="full"
                  size="lg"
                  variant="ghost"
                  leftIcon={<BsFillImageFill />}
                >
                  APoD
                </Button>
              </NextLink>
              <NextLink href="/landsat">
                <Button
                  w="full"
                  size="lg"
                  variant="ghost"
                  leftIcon={<FaSatelliteDish />}
                >
                  Landsat
                </Button>
              </NextLink>
              <NextLink href="/epic">
                <Button
                  w="full"
                  size="lg"
                  variant="ghost"
                  leftIcon={<GiEarthAmerica />}
                >
                  EPIC
                </Button>
              </NextLink>
              <NextLink href="/rover">
                <Button
                  w="full"
                  size="lg"
                  variant="ghost"
                  leftIcon={<BsFillImageFill />}
                >
                  Rover Photos
                </Button>
              </NextLink>
            </VStack>
          </Box>
          <AlienHead
            boxSize="65"
            bg={backGround}
            aria-label="Open menu"
            onClick={mobileNav.onOpen}
          />
          <ButtonGroup ml={15} variant="ghost" spacing={3} display={{ base: "none", md: "inline-flex" }}>
            <HeaderButton 
              href="/"
              title="Home" 
              buttonIcon={<AiFillHome />}
            />
            <HeaderButton
              href="/apod"
              title="APoD" 
              buttonIcon={<BsFillImageFill />}
            />
            <HeaderButton 
              href="/landsat"
              title="Landsat" 
              buttonIcon={<FaSatelliteDish />}
            />
            <HeaderButton 
              href="/epic"
              title="EPIC" 
              buttonIcon={<GiEarthAmerica />}
            />
            <HeaderButton 
              href="/rover"
              title="Rover Photos" 
              buttonIcon={<GiEarthAmerica />}
            />
          </ButtonGroup> 
        </HStack>
        <Spacer />
        <IconButton
          mx={2}
          p={1}
          icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
          isRound={true}
          aria-label="Color Toggle"
          size="sm"
          onClick={toggleColorMode}
        />
        <HStack
          spacing={3}
          display={mobileNav.isOpen ? "none" : "flex"}
          alignItems="center"
        >
        </HStack>
      </Flex>
    </chakra.header>
  );
};

export default HeaderNav;