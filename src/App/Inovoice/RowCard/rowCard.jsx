import css from "./rowCard.module.css";
import bucket from "../../../Assets/borrar.svg"; 
import disquete from "../../../Assets/disquete.svg";

export function RowCard() {
    return (
        <tr className={css.RowStyles}>
            <td className={css.FirstInput}>
                <button><img className={css.Bucket} src={bucket} alt="bucket" /></button>
                <button><img src={disquete} alt="disquete" /></button>
            </td>
            <td><input type="number" step="1"/></td>
            <td><input className={css.InputText} type="text" /></td>
            <td><input type="number" step="1"/></td>
            <td><input type="number" step="1"/></td>
            <td><input type="number" step="0.001"/></td>
            <td><input type="number" step="0.001"/></td>
            <td><input type="number" step="0.01"/></td>
            <td><input type="number" step="0.01"/></td>
        </tr>
    )
}