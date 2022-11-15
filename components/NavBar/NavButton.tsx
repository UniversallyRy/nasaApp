import NextLink from "next/link";
import { IconType } from "react-icons";
import { FaMoon, FaSun } from "react-icons/fa";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

//      leftIcon={props.buttonIcon}
//     ToggleButton:
//      mx={2}
//      p={1}
//      _focus={{ outline: "none" }}
///      icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
//      isRound={true}
//      aria-label="Color Toggle"
//      size="sm"
//      onClick={toggleColorMode}
type Props = {
  title: string;
  buttonIcon?: React.ReactElement<IconType>;
  href: string;
};

export default function NavButton({ ...props }: Props) {
  const router = useRouter();
  const label = `${props.title} navigation button`;

  if (label) {
    return (
      <button
        onClick={() => router.push(props.href)}
        aria-label={label}
        className="mx-2 rounded-md font-semibold bg-gray-600 w-32 :focus:outline-none hover:shadow-lg hover:shadow-gray-800"
      >
        <NextLink passHref href={props.href} legacyBehavior>
          {props.title}
        </NextLink>
      </button>
    );
  }
  return null;
}

export const ToggleButton = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
  return (
    <button>

    </button>
  );
};

