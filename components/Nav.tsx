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
  Spacer
} from "@chakra-ui/react";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { BsFillCameraVideoFill, BsFillImageFill } from "react-icons/bs";
import { FaMoon, FaSun, FaSatelliteDish } from 'react-icons/fa'
import { GiEarthAmerica } from 'react-icons/gi'


export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <NextLink href="/">
                  <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
                    Home
                  </Button>
                </NextLink>
                <NextLink href="/apods">
                  <Button
                    w="full"
                    variant="ghost"
                    leftIcon={<BsFillImageFill />}
                  >
                    APOD
                  </Button>
                </NextLink>
                <NextLink href="/earth">
                  <Button
                    w="full"
                    variant="ghost"
                    leftIcon={<FaSatelliteDish />}
                  >
                    Earth
                  </Button>
                </NextLink>
                <NextLink href="/epic">
                  <Button
                    w="full"
                    variant="ghost"
                    leftIcon={<GiEarthAmerica />}
                  >
                    Epics
                  </Button>
                </NextLink>
              </VStack>
            </Box>

            <HStack spacing={4} display={{ base: "none", md: "inline-flex" }}>
              <NextLink href="/">
                <Button minW={40} variant="ghost" leftIcon={<AiFillHome />} size="sm">
                  Home
                </Button>
              </NextLink>
              <NextLink href="/apods">
                <Button
                  minW={40} 
                  size="sm"
                  variant="ghost"
                  leftIcon={<BsFillImageFill />}
                >
                  APOD
                </Button>
              </NextLink>
              <NextLink href="/earth">
                <Button
                  minW={40} 
                  size="sm"
                  variant="ghost"
                  leftIcon={<FaSatelliteDish />}
                >
                  Earth
                </Button>
              </NextLink>
              <NextLink href="/epic">
                <Button
                  minW={40} 
                  size="sm"
                  variant="ghost"
                  leftIcon={<GiEarthAmerica />}
                >
                  Epics
                </Button>
              </NextLink>
            </HStack> 

          </HStack>
          <Spacer />
          <IconButton
                  mx={2}
                  p={1}
                  icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
                  isRound={true}
                  aria-label="Color Toggle"
                  size="sm"
                  alignSelf="flex-end"
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
}