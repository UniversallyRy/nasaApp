import React from "react";
import { AiFillHome } from "react-icons/ai";
import { ButtonGroup } from "@chakra-ui/react";
import { BsFillImageFill } from "react-icons/bs";
import { FaSatelliteDish } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
import NavButton, { ToggleButton } from "./NavButton";
//      display={{ base: "none", lg: "inline-flex" }}

export default function HButtons() {
  return (
    <div className="flex flex-row px-3 pl-10">
      <NavButton href="/" title="Home" />
      <NavButton href="/apod" title="APOD" />
      <NavButton href="/landsat" title="Landsat" />
      <NavButton href="/epic" title="EPIC" />
      <NavButton href="/rover" title="Rover Photos" />
      <ToggleButton />
    </div>
  );
};
