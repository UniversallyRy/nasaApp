import Link from 'next/link'
import navStyles from '../styles/Nav.module.sass'

function Navbar() {
    return (
        <nav className={ navStyles.nav }>
           <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>   
                <li>
                    <Link href='apodpage'>APOD</Link>
                </li>   
                <li>
                    <Link href='/Earth'>Landsat Imagery</Link>
                </li>   
                <li>
                    <Link href='/epic'>Earth Polychromatic Imaging Camera</Link>
                </li>   
                <li>
                    <Link href='/about'>About</Link>
                </li>   
            </ul> 
        </nav>
    )
}

export default Navbar
