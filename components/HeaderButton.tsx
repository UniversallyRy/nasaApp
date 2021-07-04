import { useRouter } from 'next/router'
import { useColorModeValue, Button } from "@chakra-ui/react";

const HeaderButton = ({title, buttonIcon, href}:any) => {
  const bg = useColorModeValue("blue.500", "purple.900");
  const router = useRouter()
  
  return (
    <Button
      bg={bg}
      size="md"
      fontWeight="semibold"
      rounded="md"
      shadow="sm"
      variant="ghost" 
      leftIcon={buttonIcon}
      _focus={{
        outline: "none",
        boxShadow: "0 0 1px 1px rgba(46, 49, 49, 1), 0 1px 1px rgba(0, 0, 0, .15)"
      }}
      _hover={{
        shadow:"lg",
        fontWeight:"extrabold"
      }}
      onClick={() => router.push(href)}
    >
      {title}
    </Button>
  );
};

export default HeaderButton;