import React, { Fragment } from "react";
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

type Props = {
  isSubmitting: boolean;
  isEditing: boolean;
};

const exampleArr = [
  {
    name: 'Great Pyramid of Giza',
    description: 'Lat: 29.9792, Lon: 31.13',
  },
  {
    name: 'Vegas Strip',
    description: 'Lat: 36.11, Lon: 115.20',
  },
  {
    name: 'Beijing',
    description: 'Lat: 39.9, Lon: 116.4',
  },
]

export default function Examples() {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
            {exampleArr.map((item) => (
              <div key={item.name} className="ml-4">
                <p className="text-sm font-medium text-gray-900">
                  {item.name}
                </p>
                <p className="text-sm text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};
