import React, { ButtonHTMLAttributes, forwardRef } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  onChange: (date: Date) => Promise<void> | (void | undefined);
  selected: Date | undefined;
}

export default function DatePicker({ ...props }: Props) {

  const DateButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<any>>(
    ({ value, onClick }, ref) => {
      return (
        <button
          className="m-3 p-4 bg-gray-300 :focus:outline-none"
          aria-label="Calender Date"
          onClick={onClick}
          ref={ref}
        >
          {value}
        </button>
      );
    }
  );
  DateButton.displayName = "DateButton";

  return (
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
