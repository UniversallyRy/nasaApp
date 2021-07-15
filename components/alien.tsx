import React from 'react';
import { Box, useColorModeValue } from "@chakra-ui/react"


const Alien = ({size}:any) => {
    const bg = useColorModeValue("gray.200", "gray.700");
    const fitToSize = () => {
        let sizeNum = size.match(/\d/g);
        sizeNum = sizeNum.join((""))
        let adjustedSize = (sizeNum / 3.75) 
        return adjustedSize + 'px'
    }
    return (
        <Box 
            bg={bg}
            m={10}
            w="2xs"
            h="2xs"
            transform= "rotate(45deg)"
            borderTopLeftRadius="150px"
            borderTopRightRadius="150px"
            borderBottomLeftRadius="150px"
            borderBottomRightRadius="20px"
            boxShadow= "0 0 15px 15px rgba(0, 0, 0, 0.5)"
            _before={{ 
                content: '""',
                pos: "absolute",
                w: "3xs",
                h: "3xs",
                bg: "gray.900",
                borderTopLeftRadius: "200px",
                borderBottomRightRadius: "200px",
                top: "200px",
                left: "100px",
                transform: "rotate(45deg)",
            }}
            _after={{ 
                content: '""',
                pos: "absolute",
                w: fitToSize,
                h: fitToSize,
                bg: "gray.900",
                borderTopLeftRadius: "200px",
                borderBottomRightRadius: "200px",
                top: "100px",
                left: "200px",
                transform: "rotate(-45deg)",
            }}
            _hover={{
                bg: "radial-gradient(circle, #a2f793, #58f03e)",
                boxShadow:"0 0 5px 5px rgba(0, 0, 0, 0.5), 0 0 20px 20px rgba(88, 240, 62, 0.4)"
            }}
        />
    )
}

export default Alien;
