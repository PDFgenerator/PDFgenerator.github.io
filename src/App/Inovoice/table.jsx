import { RowCard } from './RowCard/rowCard';
import css from './table.module.css';
import plus from "../../Assets/plus.svg";
import { DataService } from '../../Repository/DataService';
import { useEffect, useState } from "react";

function Table() {

    const [total, setTotals] = useState(DataService.totals.totalAmountUSD);

    useEffect( () => {
        setTotals(DataService.totals.totalAmountUSD)
    },[total])

    let array = DataService.table;

    const create = () => {
        console.log("vreo algo")
    }

    return (
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
            
            {/* {console.log(DataService.table)} */}
            {   
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
                            />
                })
            }
            
          </section>

          <button onClick={ () => {create()} } className={css.ButtonPlus}><img src={plus} alt="plus" /></button>
          <footer>Total Amount USD&nbsp;&nbsp;&nbsp;&nbsp;{total}</footer>
      </div>
    );
  }
  
export default Table;