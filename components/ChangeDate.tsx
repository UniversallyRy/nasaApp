import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  onChange: (date: Date) => Promise<void> | void;
  selected: Date | undefined;
};
  
const DatePicker = ({ ...props }: Props) => {
  const isLight = useColorMode().colorMode === "light"; //you can check what theme you are using right now however you want
  return (
    // if you don't want to use chakra's colors or you just wwant to use the original ones,
    // set className to "light-theme-original" ↓↓↓↓
    <Box m={1} color="black" className={isLight ? "light-theme" : "dark-theme"}>
      <ReactDatePicker
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        {...props}
      />
    </Box>
  );
};

export default DatePicker;

