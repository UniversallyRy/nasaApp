import { useRouter, NextRouter } from "next/router";
import { Button, IconButton, useColorMode } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaMoon, FaSun } from "react-icons/fa";

type Props = {
  title: string;
  buttonIcon: React.ReactElement<IconType>;
  href: string;
};

const NavButton = ({ ...props }: Props) => {
  const router: NextRouter = useRouter();
  const label = `${props.title} navigation button`;

  return (
    <Button
      alignSelf="center"
      textAlign="center"
      aria-label={label}
      size="lg"
      fontWeight="semibold"
      leftIcon={props.buttonIcon}
      _focus={{
        outline: "none",
      }}
      _hover={{
        shadow: "lg",
        boxShadow:
          "0 0 .4px .3px rgba(46, 49, 49, 1), 0 .3px .3px rgba(0, 0, 0, .35)",
      }}
      onClick={() => router.push(props.href)}
    >
      {props.title}
    </Button>
  );
};

export const ToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      mx={2}
      p={1}
      _focus={{ outline: "none" }}
      icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
      isRound={true}
      aria-label="Color Toggle"
      size="sm"
      onClick={toggleColorMode}
    />
  );
};

export default NavButton;
