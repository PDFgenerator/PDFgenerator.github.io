import css from './nav.module.css';
import burger from '../../Assets/burger.svg';
import PDF from '../../Repository/PDF.js';
import ValidationsPDF from '../../Repository/ValidationsPDF';

function Nav() {

    let validate = new ValidationsPDF();
    
    const GeneratePDF = () => {
        validate.ValidationsForPDF() ? PDF() : validate.PrintValidationFail();
    }

    return (
        <nav className={css.nav}>
            <p>Digital Invoice</p>
            <div className={css.Generate}>
                <button onClick={ () => GeneratePDF() }><p>Generate PDF</p></button>
            </div>
            <div className={css.ContainerBurguer}><img src={burger} alt="" /></div>
        </nav>
    )
}

export default Nav;