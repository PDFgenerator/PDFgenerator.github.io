import { RowCard } from './RowCard/rowCard';
import css from './table.module.css';
import plus from "../../Assets/plus.svg";

function Table() {
    return (
      <div className={css.ContainerTable}>
          <section>
            <header>
                <h5 className={css.FirstTitle}></h5>
                <h5 className={css.code} >CODE</h5>
                <h5 className={css.description}>DESCRIPTION/CODE CUSTOMER</h5>
                <h5 className={css.cases}>CASES</h5>
                <h5 className={css.un}>UN</h5>
                <h5 className={css.net}>NET W.</h5>
                <h5 className={css.gross}>GROSS W.</h5>
                <h5 className={css.price}>PRICE</h5>
                <h5 className={css.amount}>AMOUNT</h5>
            </header>
            
           
            <RowCard />
          </section>

          <button className={css.ButtonPlus}><img src={plus} alt="plus" /></button>
          <footer>Total Amount USD&nbsp;&nbsp;&nbsp;&nbsp;90.480,00</footer>
      </div>
    );
  }
  
export default Table;