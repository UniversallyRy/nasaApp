import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Flex } from "@chakra-ui/react";

type DateProps = {
  selected?: Date
  onChange: (date: Date) => Promise<void>
};

const ChangeDate = ({ selected, onChange }: DateProps) => {
  return (
    <Flex 
      m={5}
      zIndex="docked" 
      color='black'
    >
      <DatePicker withPortal selected={selected} onChange={onChange} />
    </Flex>
  )
};

export default ChangeDate;
