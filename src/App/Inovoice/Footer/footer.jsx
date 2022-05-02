import css from './footer.module.css';
import { DataService } from '../../../Repository/DataService';
import { useState } from 'react';
import email from '../../../Assets/mail.svg';
import telefono from '../../../Assets/telefono.svg';

function Footer() {

    const [info, setInfo]= useState(DataService.footer)

    return(
        <div className={css.Footer}>
            <section className={css.ContaineLines}>
                <div className={css.Line}></div>
                <h2 className={css.Title}>Fasana Export-Import S.L.</h2>
                <div className={css.Line}></div>
            </section>
            <article>
                <p>{info.code}</p>
                <p>{info.direction}</p>
                <div className={css.Contacto}>
                    <p><img src={telefono} alt="telefono" />{info.numberPhone}</p>
                    <p><img src={email} alt="email" />{info.email}</p>
                </div>
            </article>
        </div>
    )

}

export default Footer;