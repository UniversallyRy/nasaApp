import headerStyles from '../styles/Header.module.sass'

function Header() {
    return (
        <>
            <h1 className={ headerStyles.title }>
                <span>NASA</span> Info
            </h1>     
        </>
    )
}

export default Header
