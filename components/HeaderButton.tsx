import { useRouter, NextRouter } from 'next/router'
import { useColorModeValue, Button } from "@chakra-ui/react";
import { IconType }  from 'react-icons';


type ButtonProps = {
  title: string
  buttonIcon: React.ReactElement<IconType>
  href: string
};

const HeaderButton = ({title, buttonIcon, href}: ButtonProps) => {

  const backGround = useColorModeValue("blue.500", "purple.900");

  const router: NextRouter = useRouter()
  
  return (
    <Button
      bg={backGround}
      size="md"
      fontWeight="semibold"
      rounded="sm"
      shadow="md"
      variant="outlined" 
      leftIcon={buttonIcon}
      _focus={{
        outline: "none",
        boxShadow: "0 0 1px 1px rgba(46, 49, 49, 1), 0 1px 1px rgba(0, 0, 0, .35)"
      }}
      _hover={{
        shadow:"xl",
        fontSize:"lg",
        boxShadow: "0 0 1px 1px rgba(46, 49, 49, 1), 0 1px 1px rgba(0, 0, 0, .35)"
      }}
      onClick={() => router.push(href)}
    >
      {title}
    </Button>
  );
};

export default HeaderButton;