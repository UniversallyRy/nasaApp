import React, { MouseEventHandler } from 'react';
import { Button, useColorModeValue } from "@chakra-ui/react";

type AlienProps = {
    boxSize?: any 
    bg?: any
    onClick?: (() => void) | MouseEventHandler<HTMLButtonElement>
}

const AlienHead = ({ ...props }: AlienProps) => {
    const shadowToggle = useColorModeValue("0 0 5px 5px rgba(255, 255, 255, 0.4)", "0 0 5px 5px rgba(0, 0, 0, 0.5)");
    const glowToggle = useColorModeValue("0 0 1px 1px rgba(255, 255, 255, 0.3), 0 0 5px 5px rgba(88, 240, 62, 0.5)", "0 0 1px 1px rgba(0, 0, 0, 0.5), 0 0 5px 5px rgba(88, 240, 62, 0.4)");

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
        <Button
            {...props}
            boxSize={props.boxSize}
            aria-label='Animated Alien Head'
            borderTopLeftRadius={headRadius()}
            borderTopRightRadius={headRadius()}
            borderBottomLeftRadius={headRadius()}
            borderBottomRightRadius="15"
            boxShadow={shadowToggle}
            m={3}
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
                bg: "black",
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
                bg: "black",
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
