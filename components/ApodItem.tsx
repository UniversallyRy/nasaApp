
import Link from 'next/link';
import Image from 'next/image';
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
            blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            placeholder="blur"
            alt={ item.title }
            />
        <h2>{ item.title }</h2>
        <p>{item.explanation}</p>
        <Link href={`/apods/${item.id = index}`}>Learn more</Link>
        </motion.div>
    )
};

export default ApodItem;