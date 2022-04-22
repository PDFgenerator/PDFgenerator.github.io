import css from "./rowCard.module.css";
import bucket from "../../../Assets/borrar.svg"; 
import disquete from "../../../Assets/disquete.svg";
import { useState } from "react";
import {DataService} from "../../../Repository/DataService.js";

export function RowCard(props) {
    
    const [id, setId] = useState(props.id);
    const [code, setCode] = useState();
    const [description, setDescription] = useState();
    const [cases, setCases] = useState();
    const [un, setUn] = useState();
    const [net, setNet] = useState();
    const [gross, setGross] = useState();
    const [price, setPrice] = useState();
    const [amount, setAmount] = useState();

    const edit = (rowToEdit) => {
        console.log(DataService.table.filter( row => row.id === rowToEdit.id))
        let row = DataService.table.filter( row => row.id === rowToEdit.id)
        let index = DataService.table.indexOf(row[0])

        DataService.table[index] = rowToEdit;
    }

    const save = (e) => {
        e.preventDefault()
        
        let row = {id: id, code: code, description: description, cases: cases, un: un, net: net, gross: gross, price: price, amount: amount}

        if (!code) {row.code = props.code};
        if (!description) {row.description = props.description};
        if (!cases) {row.cases = props.cases};
        if (!un) {row.un = props.un};
        if (!net) {row.net = props.net};
        if (!gross) {row.gross = props.gross};
        if (!price) {row.price = props.price};
        if (!amount) {row.amount = props.amount};

        edit(row)

        console.log(row)
        console.log(DataService.table)
    }

    return (
        <form className={css.RowStyles} onSubmit={ save } >
            
            <input defaultValue={props.code} onChange={ (e) => setCode(e.target.value) }        className={css.code} type="number" step="1" required />
            <input defaultValue={props.description} onChange={ (e) => setDescription(e.target.value) } className={css.description} type="text" required />
            <input defaultValue={props.cases} onChange={ (e) => setCases(e.target.value) }       className={css.cases} type="number" step="1" required/>
            <input defaultValue={props.un} onChange={ (e) => setUn(e.target.value) }          className={css.un} type="number" step="1" required/>
            <input defaultValue={props.net} onChange={ (e) => setNet(e.target.value) }         className={css.net} type="number" step="0.001" required/>
            <input defaultValue={props.gross} onChange={ (e) => setGross(e.target.value) }       className={css.gross} type="number" step="0.001" required/>
            <input defaultValue={props.price} onChange={ (e) => setPrice(e.target.value) }       className={css.price} type="number" step="0.01" required/>
            <input defaultValue={props.amount} onChange={ (e) => setAmount(e.target.value) }      className={css.amount} type="number" step="0.01" required/>
            
            <div className={css.FirstInput}>
                <button type="submit" ><img src={disquete} alt="disquete" /></button>
                <button><img className={css.Bucket} src={bucket} alt="bucket" /></button>
            </div>
        </form>
    )
}