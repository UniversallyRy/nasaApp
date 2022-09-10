import { AiFillHome } from "react-icons/ai";
import React from "react";
import { ButtonGroup } from "@chakra-ui/react";
import { BsFillImageFill } from "react-icons/bs";
import { FaSatelliteDish } from 'react-icons/fa';
import { GiEarthAmerica } from 'react-icons/gi';
import NavButton from './NavButton';

const HButtons = () => {

  return (

    <ButtonGroup pl={25} variant="ghost" display={{ base: "none", lg: "inline-flex" }}>
      <NavButton
        href="/"
        title="Home"
        buttonIcon={<AiFillHome />}
      />
      <NavButton
        href="/apod"
        title="APoD"
        buttonIcon={<BsFillImageFill />}
      />
      <NavButton
        href="/landsat"
        title="Landsat"
        buttonIcon={<FaSatelliteDish />}
      />
      <NavButton
        href="/epic"
        title="EPIC"
        buttonIcon={<GiEarthAmerica />}
      />
      <NavButton
        href="/rover"
        title="Rover Photos"
        buttonIcon={<GiEarthAmerica />}
      />
    </ButtonGroup>

  )
}

export default HButtons;
