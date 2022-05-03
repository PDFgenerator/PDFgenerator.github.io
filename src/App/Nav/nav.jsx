import css from './nav.module.css';
import burger from '../../Assets/burger.svg';
import { PDF } from '../../Repository/PDF';

function Nav() {

    PDF()

    return (
        <nav className={css.nav}>
            <p>Digital Invoice</p>
            <div className={css.Generate}>
                <button /*onClick={ () => pdf() }*/><p>Generate PDF</p></button>
            </div>
            <div className={css.ContainerBurguer}><img src={burger} alt="" /></div>
        </nav>
    )
}

export default Nav;