import React, { forwardRef } from "react";
import { Button, ButtonProps, useColorModeValue } from "@chakra-ui/react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  onChange: (date: Date) => Promise<void> | (void | undefined);
  selected: Date | undefined;
}

const DatePicker = ({ ...props }: Props) => {
  const backGround = useColorModeValue("gray.400", "gray.900");

  const DateButton = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ value, onClick }, ref) => {
      return (
        <Button
          _focus={{ outline: "none" }}
          bg={backGround}
          className="Calender Date"
          m={3}
          onClick={onClick}
          ref={ref}
        >
          {value}
        </Button>
      );
    }
  );
  DateButton.displayName = "DateButton";

  return (
    // if you don't want to use chakra's colors or you just want to use the original ones,
    // set className to "light-theme-original" ↓↓↓↓
    //   <Box
    //   m={{ base: 5, md: 4, lg: 6 }}
    // color="black"
    //   className={isLight ? "light-theme" : "dark-theme"}
    //   >
    <ReactDatePicker
      customInput={<DateButton />}
      calendarClassName="rasta-stripes"
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      // dropdownMode="select"
      {...props}
    />
    // </Box>
  );
};

export default DatePicker;
