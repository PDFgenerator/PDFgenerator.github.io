import css from './nav.module.css'

function Nav() {
    return (
        <nav className={css.nav}>
            <p>Digital Invoice</p>
            <button>Generar PDF</button>
            <div>Burger</div>
        </nav>
    )
}

export default Nav;