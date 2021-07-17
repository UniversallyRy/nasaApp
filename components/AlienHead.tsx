import React from 'react';
import { Stack, useColorModeValue } from "@chakra-ui/react";

type AlienProps = {
    boxSize: string
    bg?: string | undefined
};


const AlienHead = ({ ...props }: AlienProps) => {
    const shadowToggle = useColorModeValue("0 0 15px 15px rgba(255, 255, 255, 0.4)", "0 0 15px 15px rgba(0, 0, 0, 0.5)");
    const glowToggle = useColorModeValue("0 0 10px 10px rgba(255, 255, 255, 0.3), 0 0 10px 10px rgba(88, 240, 62, 0.5)", "0 0 5px 5px rgba(0, 0, 0, 0.5), 0 0 20px 20px rgba(88, 240, 62, 0.4)");

    const size:number = parseInt( (props.boxSize.match(/\d/g) || []).join("") );

    const headRadius = (): string => {
        let adjustedSize = (size / 2) 
        return adjustedSize + 'px'
    }
    
    const eyeSize = (): string => {
        let adjustedSize = (size / 3.75) 
        return adjustedSize + 'px'
    }

    const eyeRadius = (): string => {
        let adjustedSize = (size / 1.5) 
        return adjustedSize + 'px'
    }

    const eyePosition = (): string => {
        let adjustedSize = (size / 3) 
        return adjustedSize + 'px'
    }

    return (
        <Stack
            {...props}
            aria-label='Animated Alien Head'
            borderTopLeftRadius={headRadius()}
            borderTopRightRadius={headRadius()}
            borderBottomLeftRadius={headRadius()}
            borderBottomRightRadius="15"
            boxShadow={shadowToggle}
            m={10}
            transform= "rotate(45deg)"
            _before={{ 
                content: '""',
                pos: "absolute",
                w: eyeSize,
                h: eyeSize,
                top: eyeRadius,
                left: eyePosition,
                borderTopLeftRadius: eyeRadius,
                borderBottomRightRadius: eyeRadius,
                bg: "gray.900",
                transform: "rotate(45deg)",
            }}
            _after={{ 
                content: '""',
                pos: "absolute",
                w: eyeSize,
                h: eyeSize,
                top: eyePosition,
                left: eyeRadius,
                borderTopLeftRadius: eyeRadius,
                borderBottomRightRadius: eyeRadius,
                bg: "gray.900",
                transform: "rotate(-45deg)",
            }}
            _hover={{
                bg: "radial-gradient(circle, #a2f793, #58f03e)",
                boxShadow: glowToggle,
            }}
        />
    )
};

export default AlienHead;
