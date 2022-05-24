import css from "./totalResults.module.css";
import { DataService, updateTotals } from '../../../Repository/DataService';

import { useEffect, useState } from "react";
import Rounder from "../../../Repository/Rounder";


export function TotalResults({isSaved, setIsSaved}) {

    const [totals, setTotals] = useState(DataService.totals);
    const [liters, setLiters] = useState(0)

    useEffect( () => {
        setTotals(DataService.totals)
        updateTotals()
        setIsSaved(false)
    },[isSaved])
    

    const save = (e) => {
        e.preventDefault()

        DataService.totals.totalLiters = liters
        sessionStorage.setItem("DataBase", JSON.stringify(DataService))
    }

    Rounder();

    return (
        <div className={css.Container}>
            {/* {console.log(DataService.totals)} */}
            <section className={css.FirstSection}>
                <article className={css.Cfr}>
                    <p>CFR:CHITTAGONG</p>
                    <p>CONTAINER TYPE</p>
                </article>
                <article className={css.ContainerTotals}>
                    <div className={css.Totals}>
                        <p>VAT...........................:</p>
                        <p>{totals.vat}</p>
                    </div>
                    <div className={css.Totals}>
                        <p>GROSS WEIGHT......:</p>
                        <p>{Math.round10(totals.gross, -3)}</p>
                    </div>
                    <div className={css.Totals}>
                        <p>NET WEIGHT...........:</p>
                        <p>{Math.round10(totals.net, -3)}</p>
                    </div>
                    <div className={css.Totals}>
                        <p>TOTAL CASES.........:</p>
                        <p>{totals.cases}</p>
                    </div>
                    <div className={css.Totals}>
                        <p>TOTAL UNITS..........:</p>
                        <p>{totals.un}</p>
                    </div>
                    <div className={css.Totals}>
                        <p className={css.TotalLiters}>TOTAL LITERS.........:</p>
                        <form className={css.FormLiters} onSubmit={ save }>
                            <input defaultValue={totals.totalLiters} onChange={ (e) => setLiters(e.target.value)} className={css.LitersInput} type="number" min="0.001" max="999999" step="0.001" required />
                            <button type="submit"  >save</button>
                        </form>
                    </div>
                </article>
            </section>
            <footer className={css.Comments}>
                <p>COMMENTS:</p>
                <p>20 FT SLIP</p>
            </footer>
        </div>
    )

}