import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  onChange: (date: Date) => Promise<void> | (void | undefined);
  selected: Date | undefined;
};

const DatePicker = ({ ...props }: Props) => {
  const isLight = useColorMode().colorMode === "light";
  return (
    // if you don't want to use chakra's colors or you just want to use the original ones,
    // set className to "light-theme-original" ↓↓↓↓
    <Box m={{ base: 5, md: 4, lg: 6 }} color="black" className={isLight ? "light-theme" : "dark-theme"}>
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

