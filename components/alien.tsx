import React from 'react';
import { Box } from "@chakra-ui/react"


const Alien = ({size='300', bg}:any) => {
    const alienSize = size.match(/\d/g).join("");
    const sizeOneAndHalf = () => {
        let adjustedSize = (alienSize / 1.5) 
        return adjustedSize + 'px'
    }
    const sizeHalved = () => {
        let adjustedSize = (alienSize / 2) 
        return adjustedSize + 'px'
    }
    const sizeThird = () => {
        let adjustedSize = (alienSize / 3) 
        return adjustedSize + 'px'
    }
    const eyeToBoxSize = () => {
        let adjustedSize = (alienSize / 3.75) 
        return adjustedSize + 'px'
    }
    return (
        <Box 
            boxSize={alienSize}
            bg={bg}
            m={5}
            transform= "rotate(45deg)"
            borderTopLeftRadius={sizeHalved()}
            borderTopRightRadius={sizeHalved()}
            borderBottomLeftRadius={sizeHalved()}
            borderBottomRightRadius="15"
            boxShadow= "0 0 15px 15px rgba(0, 0, 0, 0.5)"
            _before={{ 
                content: '""',
                pos: "absolute",
                w: eyeToBoxSize,
                h: eyeToBoxSize,
                bg: "gray.900",
                borderTopLeftRadius: sizeOneAndHalf,
                borderBottomRightRadius: sizeOneAndHalf,
                top: sizeOneAndHalf,
                left: sizeThird,
                transform: "rotate(45deg)",
            }}
            _after={{ 
                content: '""',
                pos: "absolute",
                w: eyeToBoxSize,
                h: eyeToBoxSize,
                bg: "gray.900",
                borderTopLeftRadius: sizeOneAndHalf,
                borderBottomRightRadius: sizeOneAndHalf,
                top: sizeThird,
                left: sizeOneAndHalf,
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
