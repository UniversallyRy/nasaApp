import { Popover } from "@headlessui/react";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Examples from "./Examples";

type Props = {
  isSubmitting: boolean;
  isEditing: boolean;
  setIsEditing: (bool: boolean) => void;
};
export function FormButton({ ...props }: Props) {

  return (
    <button
      type="submit"
      disabled={props.isSubmitting}
      className={`
                w-20 items-center rounded-md bg-orange-700
                px-2 py-1 text-base font-medium text-white hover:text-opacity-100
                focus:outline-none focus-visible:ring-2
                focus-visible:ring-white focus-visible:ring-opacity-75`
      }
    >
      {"SAVE"}
    </button>
  )
}

export function ExampleButton() {

  return (
    <div className="w-full max-w-sm">
      <Popover
      >
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center rounded-md bg-orange-700
                px-2 py-1 text-base font-medium text-white hover:text-opacity-100
                focus:outline-none focus-visible:ring-2
                focus-visible:ring-white focus-visible:ring-opacity-75`
              }
            >
              <ChevronDownIcon
                className={`${open ? '' : 'text-opacity-70'}
                  h-5 w-5 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Examples />
          </>
        )}
      </Popover>
    </div>
  );
}
