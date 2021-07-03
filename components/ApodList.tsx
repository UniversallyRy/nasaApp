import ApocItem from './ApodItem';
import { NextPage } from 'next';
import { motion } from "framer-motion";

interface Data {
  identifier: string;
  map: ((item: object) => void);
}
const transition = { duration: 0.5, ease: "easeInOut" };

const blogVariants = {
  enter: { transition: { staggerChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.1 } }
};

const ApodList: NextPage<{ data: Data }> = ({ resData }:any) => {

  return (
    <div className="page">
      <motion.div
        className="blog-list"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={blogVariants}
      >
        {resData.map((item:any, index:any) => (
          <ApocItem 
            key={ index } 
            item={ item } 
            index={ index }
          />
        ))}
      </motion.div>
    </div>
  )
};

export default ApodList;