import headerStyles from '../styles/Header.module.sass'

function Header() {
    return (
        <div>
            <h1 className={ headerStyles.title }>
                <span>NASA</span> Info
            </h1>     
        </div>
    )
}

export default Header
