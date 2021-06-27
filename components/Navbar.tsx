import Link from 'next/link'
import navStyles from '../styles/Nav.module.sass'
import { motion } from 'framer-motion';

function Navbar() {
    return (
        <nav className={ navStyles.nav }>
           <ul>
                <motion.li 
                    whileHover={{
                        position: 'relative',
                        zIndex: 1,
                        scale: 1.2,
                        transition: {
                            duration: .2
                        }
                    }}
                >
                    <Link href='/'>Home</Link>
                </motion.li>   
                <motion.li 
                    whileHover={{
                        position: 'relative',
                        zIndex: 1,
                        scale: 1.2,
                        transition: {
                            duration: .2
                        }
                    }}
                >
                    <Link href='apodpage'>APOD</Link>
                </motion.li>   
                <motion.li 
                    whileHover={{
                        position: 'relative',
                        zIndex: 1,
                        scale: 1.2,
                        transition: {
                            duration: .2
                        }
                    }}
                >
                    <Link href='/Earth'>Landsat Imagery</Link>
                </motion.li>   
                <motion.li 
                    whileHover={{
                        position: 'relative',
                        zIndex: 1,
                        scale: 1.2,
                        transition: {
                            duration: .2
                        }
                    }}
                >
                    <Link href='/epic'>Earth Polychromatic Imaging Camera</Link>
                </motion.li>   
                <motion.li 
                    whileHover={{
                        position: 'relative',
                        zIndex: 1,
                        scale: 1.2,
                        transition: {
                            duration: .2
                        }
                    }}
                >
                    <Link href='/about'>About</Link>
                </motion.li>   
            </ul> 
        </nav>
    )
}

export default Navbar
