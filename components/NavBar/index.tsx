import HButtons from "./HNavButtons";
//import VButtons from "./VNavButtons";
//import { ToggleButton } from "./NavButton";
//import AlienHead from "./AlienHead";

export default function HeaderNav() {

  return (
    <div className="flex mb-5 w-full h-20 pb-2 self-center py-2 shadow-md bg-gray-900">
      <section className=" my-auto justify-between">
        {/* vertical/horizonal buttons displayed based on screen size */}
        <HButtons />
      </section>
    </div>
  );
};
