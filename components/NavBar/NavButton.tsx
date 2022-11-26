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
    <label className="flex justify-between items-center group p-2 ml-auto text-xl">
      <input type="checkbox" className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" />
      <span className="w-16 h-10 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:after:bg-black/75 peer-checked:bg-gray-700 after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"></span>
    </label>
  );
};
