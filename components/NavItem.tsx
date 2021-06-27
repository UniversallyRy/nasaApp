
import { motion } from 'framer-motion';
import Link from 'next/link'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const NavItem = ({ className, title, href, i}:any) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      className={className}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link passHref href={href}>
      <h2 className="nav-item-title" style={style}>
        {title}
        </h2>
      </Link>
    </motion.li>
  );
};
