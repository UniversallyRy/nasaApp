import React from 'react';
import styles from '../../styles/alien.module.sass';
import { Box, chakra, VStack, Text, TextProps, Grid, Heading, useColorModeValue } from "@chakra-ui/react"


const Alien = () => {
    return (
        <Box 
            pos="relative"
            bg="#252525"
            w="300px"
            h=" 300px"
            transform= "rotate(45deg)"
            borderTopLeftRadius="200px"
            borderBottomLeftRadius="200px"
            borderBottomRightRadius="50px"
            borderTopRightRadius="200px"
            boxShadow= "0 0 15px 15px rgba(0, 0, 0, 0.5)"
            _before={{ 
                content: '""',
                pos: "absolute",
                w: "80px",
                h: "80px",
                bg: "#0b0b0b",
                borderTopLeftRadius: "200px",
                borderBottomRightRadius: "200px",
                top: "200px",
                left: "100px",
                transform: "rotate(45deg)",
            }}
            _after={{ 
                content: '""',
                pos: "absolute",
                w: "80px",
                h: "80px",
                bg: "#0b0b0b",
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
        ></Box>
    )
}

export default Alien;
