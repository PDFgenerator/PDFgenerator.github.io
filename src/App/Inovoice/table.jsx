import { RowCard } from './RowCard/rowCard';
import css from './table.module.css';
import plus from "../../Assets/plus.svg";

function Table() {
    return (
      <table className={css.ContainerTable}>
          <div>
            <thead>
                <th className={css.FirstTitle}></th>
                <th>CODE</th>
                <th>DESCRIPTION/CODE CUSTOMER</th>
                <th>CASES</th>
                <th>UN</th>
                <th>NET W.</th>
                <th>GROSS W.</th>
                <th>PRICE</th>
                <th>AMOUNT</th>
            </thead>
            <tbody>
                <RowCard />
            </tbody>
            <button className={css.ButtonPlus}><img src={plus} alt="plus" /></button>
          </div>
          <footer>Total Amount USD&nbsp;&nbsp;&nbsp;&nbsp;90.480,00</footer>
      </table>
    );
  }
  
export default Table;