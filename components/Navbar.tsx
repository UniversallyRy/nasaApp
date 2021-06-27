import { useRef } from 'react'
import styles from '../styles/Nav.module.sass'
import { useDimensions } from "../pages/api/use-dimensions";
import { NavItem } from './NavItem'
import { motion, useCycle } from 'framer-motion';
import { MenuToggle } from './MenuToggle';

const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
};

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const items = [
    {
        title: 'Home',
        href: '/'
    },  
    {
        title: 'APOD',
        href: '/apods'
    },
    {
        title: 'Landsat Imagery',
        href: '/Earth',
    },
    {
        title:'Earth Polychromatic Imaging Camera',
        href: '/epic'
    },
    {
        title: 'About',
        href: '/about'
    },
    ]

function Navbar() {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    return (
        <motion.nav
            className={ styles.container}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
        >
            <motion.div className={styles.background} variants={sidebar} />
            <motion.ul className={styles.list} variants={variants}>
                {items.map(i => (
                    <NavItem className={styles.item} i={i} key={i} href={i.href} title={i.title} />
                    ))}
            </motion.ul>
            <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
    )
}

export default Navbar
