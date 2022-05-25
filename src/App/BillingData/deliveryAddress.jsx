import { DataService } from "../../Repository/DataService.js";
import css from "./deliveryAddress.module.css";

export function DeliveryAddress() {

    console.log(DataService.header.deliveryAdress.adress); 

    return (
        <div className={css.ContainerForm} >
            <h1>Delivery Address</h1>

            <form>
                <p>Code:</p>
                <input type="text" required />

                <p>Trasnport Company:</p>
                <input type="text" required />
                
                <p>Address:</p>
                <textarea cols="30" rows="10"></textarea>

                <p>Country:</p>
                <input type="text" required />

                <button type="submit" >Save</button>
            </form>
        </div>
    )
}

