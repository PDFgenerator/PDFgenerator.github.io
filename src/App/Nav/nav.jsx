import css from './nav.module.css';
import burger from '../../Assets/burger.svg';

function Nav() {
    return (
        <nav className={css.nav}>
            <p>Digital Invoice</p>
            <div className={css.Generate}>
                <button><p>Generar PDF</p></button>
            </div>
            <div className={css.ContainerBurguer}><img src={burger} alt="" /></div>
        </nav>
    )
}

export default Nav;