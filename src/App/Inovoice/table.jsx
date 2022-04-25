import { RowCard } from './RowCard/rowCard';
import { TotalResults } from './TotalResults/totalResults';
import css from './table.module.css';
import plus from "../../Assets/plus.svg";
import { DataService } from '../../Repository/DataService';
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Table() {

    const [total, setTotals] = useState(DataService.totals.amount);
    const [array, setArray] = useState([]);
    const [loading, setLoading] = useState(false)
    const [isSaved, setIsSaved] = useState(false)

    useEffect( () => {
        setArray(DataService.table)
        setTotals(DataService.totals.amount)
        setLoading(true)
    },[loading])

    const create = () => {
        setLoading(true)

        let newROW = {
            id: uuidv4(),
            code: "1",
            description: "example",
            cases: "0",
            un: "0.000",
            net: "0.000",
            gross: "0.000",
            price: "0.00",
            amount: "0.00",
        }

        array.push(newROW)
    }

    // console.log("Rows counter: ", array.length)
    console.log("Rows counter: ", array)

    return (
        <div>
            <div className={css.ContainerTable}>
                <section>
                    <header>
                        <h5 className={css.code} >CODE</h5>
                        <h5 className={css.description}>DESCRIPTION/CODE CUSTOMER</h5>
                        <h5 className={css.cases}>CASES</h5>
                        <h5 className={css.un}>UN</h5>
                        <h5 className={css.net}>NET W.</h5>
                        <h5 className={css.gross}>GROSS W.</h5>
                        <h5 className={css.price}>PRICE</h5>
                        <h5 className={css.amount}>AMOUNT</h5>
                        <h5 className={css.FirstTitle}></h5>
                    </header>
                    
                    {   loading?
                        array.map( (row, index) => {
                            // console.log(row.code);
                            return  <RowCard 
                                        key={index}
                                        id={row.id}
                                        code={row.code}
                                        description={row.description}
                                        cases={row.cases}
                                        un={row.un}
                                        net={row.net}
                                        gross={row.gross}
                                        price={row.price}
                                        amount={row.amount}
                                        setIsSaved={setIsSaved}
                                    />
                        })
                        :"is loading"
                    }
                </section>

                <button onClick={ () => {create(); setLoading(false)} } className={css.ButtonPlus}><img src={plus} alt="plus" /></button>
                <footer>Total Amount USD&nbsp;&nbsp;&nbsp;&nbsp;{total}</footer>
            </div>
            <TotalResults isSaved={isSaved} setIsSaved={setIsSaved}/>
        </div>
    );
  }
  
export default Table;