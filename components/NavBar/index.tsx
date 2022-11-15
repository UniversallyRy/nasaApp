import HButtons from "./HNavButtons";
//import VButtons from "./VNavButtons";
//import { ToggleButton } from "./NavButton";
//import AlienHead from "./AlienHead";

export default function HeaderNav() {
  // const isActive = router.pathname === '/'
  // const mobileNav = useDisclosure();

  //    <HStack
  //      spacing={3}
  //      display={mobileNav.isOpen ? "none" : "flex"}
  //      alignItems="center"
  //    />
  //
  //        <AlienHead
  //          boxSize="65"
  //          aria-label="Open menu"
  //          onClick={mobileNav.onOpen}
  //        />
  //
  //         <VButtons mobileNav={mobileNav} />
  //
  //    <ToggleButton />
  //
  return (
    <div className="flex mb-5 w-full h-20 px-2 self-center py-4 shadow-md bg-gray-900">
      <section className=" my-auto justify-between">
        {/* vertical/horizonal buttons displayed based on screen size */}
        <HButtons />
      </section>
    </div>
  );
};

