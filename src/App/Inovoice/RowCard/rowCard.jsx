import css from "./rowCard.module.css";
import bucket from "../../../Assets/borrar.svg"; 
import disquete from "../../../Assets/disquete.svg";

export function RowCard() {

    const save = () => {
        console.log("eeepa")
    }

    return (
        <form action="" className={css.RowStyles}>
            <div className={css.FirstInput}>
                <button><img className={css.Bucket} src={bucket} alt="bucket" /></button>
                <button onClick={ () => save() } ><img src={disquete} alt="disquete" /></button>
            </div>
            <input className={css.code} type="number" step="1"/>
            <input className={css.description} type="text" />
            <input className={css.cases} type="number" step="1"/>
            <input className={css.un} type="number" step="1"/>
            <input className={css.net} type="number" step="0.001"/>
            <input className={css.gross} type="number" step="0.001"/>
            <input className={css.price} type="number" step="0.01"/>
            <input className={css.amount} type="number" step="0.01"/>
        </form>
    )
}