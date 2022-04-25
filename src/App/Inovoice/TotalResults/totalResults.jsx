import css from "./totalResults.module.css";
import { DataService, updateTotals } from '../../../Repository/DataService';

import { useEffect, useState } from "react";

export function TotalResults({isSaved, setIsSaved}) {

    const [totals, setTotals] = useState(DataService.totals);

    useEffect( () => {
        setTotals(DataService.totals)
        updateTotals()
        setIsSaved(false)
    },[isSaved])


    return (
        <div className={css.Container}>
            <section className={css.FirstSection}>
                <article className={css.Cfr}>
                    <p>CFR:CHITTAGONG</p>
                    <p>CONTAINER TYPE</p>
                </article>
                <article className={css.ContainerTotals}>
                    <div className={css.Totals}>
                        <p>VAT.........................:</p>
                        <p>{totals.vat}</p>
                    </div>
                    <div className={css.Totals}>
                        <p>GROSS WEIGHT......:</p>
                        <p>{totals.gross}</p>
                    </div>
                    <div className={css.Totals}>
                        <p>NET WEIGHT...........:</p>
                        <p>{totals.net}</p>
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
                        <p>TOTAL LITERS.........:</p>
                        <p>{totals.totalLiters}</p>
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