import { useRouter, NextRouter } from 'next/router';
import {  Button } from "@chakra-ui/react";
import { IconType }  from 'react-icons';

type ButtonProps = {
  title: string
  buttonIcon: React.ReactElement<IconType>
  href: string
};

const HeaderButton = ({ ...props }: ButtonProps) => {

  const router: NextRouter = useRouter();

  const label = `${props.title} navigation button`;
  
  return (
    <Button
      aria-label={label}
      size="md"
      fontWeight="semibold"
      rounded="sm"
      leftIcon={props.buttonIcon}
      _focus={{
        outline: "none",
        boxShadow: "0 0 1px 1px rgba(46, 49, 49, 1), 0 1px 1px rgba(0, 0, 0, .35)"
      }}
      _hover={{
        shadow:"xl",
        boxShadow: "0 0 .4px .3px rgba(46, 49, 49, 1), 0 .3px .3px rgba(0, 0, 0, .35)"
      }}
      onClick={() => router.push(props.href)}
    >
      {props.title}
    </Button>
  );
};

export default HeaderButton;