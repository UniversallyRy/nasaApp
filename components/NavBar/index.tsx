import HButtons from "./HNavButtons";
//import VButtons from "./VNavButtons";
//import { ToggleButton } from "./NavButton";
//import AlienHead from "./AlienHead";

export default function HeaderNav() {

  return (
    <div className="flex mb-5 h-20 pb-2 py-3 self-center shadow-md bg-gray-900">
      {/* vertical/horizonal buttons displayed based on screen size */}
      <HButtons />
    </div>
  );
};
