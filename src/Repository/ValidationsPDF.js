import { DataService } from './DataService';


class ValidationsPDF {

    #MoreOfZero(num) {
      let result = num > 0 ;
      return result
    }

    ValidateRows() {
        let result = this.#MoreOfZero(DataService.table.length);
        return result;
    }

    ValidateLiters() {
        let result = this.#MoreOfZero(DataService.totals.totalLiters);
        return result;
    }

    Validate_Cases_Units_net_gross() {
        let array = DataService.table
        let result = true;

        let arrayMap = array.map(
            row => [parseFloat(row.cases), parseFloat(row.un), parseFloat(row.net), parseFloat(row.gross)]
        )

        arrayMap.forEach( row => {
            return row.find(cell => {
                if ( cell === 0 ) return result = false;
            })
        })

        return result;
    }

    ValidationsForPDF() {
        let result = this.ValidateRows() && this.ValidateLiters() && this.Validate_Cases_Units_net_gross();
        return result;
    }
    
    PrintValidationFail() {
        console.group("%cValidations fail to generate the PDF.", "font-size: 14px; background: yellow; color: black");
            if(!this.ValidateRows()) {console.log("There are not rows in the table.");alert("There are not rows in the table.");}
            if(!this.ValidateLiters()) {console.log("Total liters equals 0.");alert("Total liters equals 0. To continue, total liters must be greater than 0.");}
            if(!this.Validate_Cases_Units_net_gross()) {console.log("Exist some cell with value is equals 0.");alert("Exist some cell with value is equals 0 in columns cases, units, net or gross.");}
        console.groupEnd();    
    }
}

export default ValidationsPDF;