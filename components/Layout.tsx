import styles from '../styles/Layout.module.sass'
import Nav from '../components/Navbar'
import Header from '../components/Header'

const Layout = ({ children }:any) => {
    return (
        <>
            <Nav/>
            <div className={ styles.container }>
                <main className={ styles.main }>
                    <Header/>
                    { children }
                </main>
            </div>
        </>
    )
}

export default Layout
