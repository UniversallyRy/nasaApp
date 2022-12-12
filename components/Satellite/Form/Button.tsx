import { Popover } from "@headlessui/react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
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
                w-40 h-9 items-center rounded-sm bg-gray-500 select-none
                px-2 py-1 text-base font-medium hover:bg-gray-600
                shadow-gray-600 shadow-sm border border-black/20 focus:outline-none`}
    >
      {"SEARCH"}
    </button>
  );
}

export function ExampleButton() {
  return (
    <div className="w-4 max-w-sm">
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                h-9 group inline-flex items-center rounded-sm bg-gray-500
                px-2 py-1 text-base font-medium text-white hover:text-opacity-100
                focus:outline-none focus-visible:ring-2 border border-black/20 shadow-gray-600
                focus-visible:ring-gray-600 focus-visible:ring-opacity-75`}
            >
              <ChevronDownIcon
                className={`${open ? "" : "text-opacity-70"}
                  h-5 w-5 text-black transition duration-150 ease-in-out group-hover:text-opacity-80`}
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
