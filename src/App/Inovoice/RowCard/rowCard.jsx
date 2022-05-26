import css from "./rowCard.module.css";
import bucket from "../../../Assets/borrar.svg"; 
import disquete from "../../../Assets/disquete.svg";
import { useState } from "react";
import {calculateAmount, DataService, updateTotals} from "../../../Repository/DataService.js";

export function RowCard(props) {
    
    const [id, setId] = useState(props.id);
    const [code, setCode] = useState();
    const [description, setDescription] = useState();
    const [cases, setCases] = useState(0);
    const [un, setUn] = useState();
    const [net, setNet] = useState();
    const [gross, setGross] = useState();
    const [price, setPrice] = useState(0);
    const [amount, setAmount] = useState(props.amount);
   
    const saveInMobile = () => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
           setInterval(window.location.reload(true), 104000) 
        }
    }

    const edit = (rowToEdit) => {
        let row = DataService.table.filter( row => row.id === rowToEdit.id)
        let index = DataService.table.indexOf(row[0])

        DataService.table[index] = rowToEdit;
        sessionStorage.setItem("DataBase", JSON.stringify(DataService))
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

        calculateAmount(DataService.table)
        edit(row)
        updateTotals()
        props.setIsSaved(true)
        saveInMobile()

        console.log(row)
    }

    return (
        <form className={css.RowStyles} onSubmit={ save } >
            
            <input defaultValue={props.code} onChange={ (e) => setCode(e.target.value) }        className={css.code} type="number" min="1" max="999999" step="1" required />
            <input defaultValue={props.description} onChange={ (e) => setDescription(e.target.value) } className={css.description} type="text" maxLength="43" required />
            <input defaultValue={props.cases} onChange={ (e) => setCases(e.target.value) }       className={css.cases} type="number" min="1" max="9999" step="1" required/>
            <input defaultValue={props.un} onChange={ (e) => setUn(e.target.value) }          className={css.un} type="number" min="1" max="99999" step="1" required/>
            <input defaultValue={props.net} onChange={ (e) => setNet(e.target.value) }         className={css.net} type="number" min="0.001" max="99999.999" step="0.001" required/>
            <input defaultValue={props.gross} onChange={ (e) => setGross(e.target.value) }       className={css.gross} type="number" min="0.001" max="99999.999" step="0.001" required/>
            <input defaultValue={props.price} onChange={ (e) => setPrice(e.target.value) }       className={css.price} type="number" step="0.01" min="0.00" required/>
            <input value={props.amount} className={css.amount} type="number" step="0.01" disabled/>
            <div className={css.FirstInput}>
            {/* onTouchStart={ ()=>{ saveInMobile() }} */}
                <button type="submit"  ><img src={disquete} alt="disquete" /></button>
                <button type="submit" onClick={ () => {props.deleteById(id); props.setIsDeleting(false)}}  >
                    <img className={css.Bucket} src={bucket} alt="bucket" />
                </button>
            </div>
            {/* <p>{code * 5}</p> ; props.ReactCode(e.target.value) */}
        </form>
    )
}