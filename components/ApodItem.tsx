
import Link from 'next/link';
import Image from 'next/image';
import { Heading } from '@chakra-ui/react';
import { motion } from "framer-motion";

const transition = { duration: 0.5, ease: "easeInOut" };

const ApodItem = ({ item, index }:any) => {

    const postPreviewVariants = {
        initial: { x: "100%", opacity: 0 },
        enter: { x: 0, opacity: 1, transition },
        exit: { x: "-100%", opacity: 0, transition }
      };

    return (
        <motion.div className="post-preview" variants={postPreviewVariants}>
            <Image
                priority
                className="post-preview__img"
                src={ item.url }
                height={ 300 }
                width={ 300 }
                placeholder="blur"
                alt={ item.title }
                />
            <Heading>{ item.title }</Heading>
            <p>{item.explanation}</p>
            <Link href={`/apods/${item.id = index}`}>Learn more</Link>
        </motion.div>
    )
};

export default ApodItem;