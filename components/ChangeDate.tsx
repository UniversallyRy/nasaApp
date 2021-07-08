import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Box } from "@chakra-ui/react";

const ChangeDate = ({ selected, onChange }:any) => {
  return (
    <Box 
        m={5}
        zIndex={10} 
        color='black'
    >
        <DatePicker withPortal selected={selected} onChange={onChange} />
    </Box>
  )
}

export default ChangeDate
