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
    <label className="flex bg-black/10 shadow-sm relative ml-auto mr-1 justify-between rounded-lg items-center group p-2">
      <input type="checkbox" className="left-1/2 -translate-x-1/2 peer appearance-none rounded-lg" />
      <FaSun className="text-gray-300 mr-2 h-6 w-6" />
      <span className="w-16 h-10 flex relative items-center flex-shrink-0 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:after:bg-black/75 peer-checked:bg-gray-700 after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"></span>
      <FaMoon className="text-black-800 ml-2 h-6 w-6" />
    </label>
  );
};
