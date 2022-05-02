import css from './header.module.css';
import Logo from '../../../Assets/logo.svg'

function Header() {
    return(
        <div className={css.ContainerHeader}>
            <div className={css.Logo}>
                <img src={Logo} alt="" />
            </div>
            <div className={css.Title}>
                <p>Fasana Export-Import S.L.</p>
                <div className={css.LineHeader}></div>
            </div>
        </div>
    )
}

export default Header;