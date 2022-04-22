import css from "./totalResults.module.css";
import { DataService } from '../../../Repository/DataService';
import { useEffect, useState } from "react";

export function TotalResults() {

    const [totals, setTotals] = useState(DataService.totals);

    let array = DataService.table

    //let cases = DataService.table[0].cases
    
    //console.log(typeof parseFloat(cases))

    const sum = () => {
        let arrayCases = array.map(
            row => (parseFloat(row.cases))
        )
    
        let initialValue = 0;
    
        let totalCases = arrayCases.reduce(
            (value1, value2) => value1 + value2,
            initialValue  
        );
    
        console.log(totalCases)
    }

    sum()
   

    useEffect( () => {
        setTotals(DataService.totals)
    },[])
    
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
                        <p>{totals.grossWeight}</p>
                    </div>
                    <div className={css.Totals}>
                        <p>NET WEIGHT...........:</p>
                        <p>{totals.netWeight}</p>
                    </div>
                    <div className={css.Totals}>
                        <p>TOTAL CASES.........:</p>
                        <p>{totals.totalCases}</p>
                    </div>
                    <div className={css.Totals}>
                        <p>TOTAL UNITS..........:</p>
                        <p>{totals.totalUnits}</p>
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