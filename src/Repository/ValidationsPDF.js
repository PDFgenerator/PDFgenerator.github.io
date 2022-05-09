import { DataService } from './DataService';

class ValidationsPDF {
    ValidateRows() {
        let result = DataService.table.length > 0;
        return result;
    }

    ValidateLiters() {
        let result = DataService.totals.totalLiters > 0;
        return result;
    }

    ValidationsForPDF() {
        let result = this.ValidateRows() && this.ValidateLiters() && true;
        return result;
    }
    
    PrintValidationFail() {
        console.group("Validations fail to generate the PDF.");
            if(!this.ValidateRows()) {console.log("There are not rows in the table.");alert("There are not rows in the table.");}
            if(!this.ValidateLiters()) {console.log("Total liters equals 0.");alert("Total liters equals 0. To continue, total liters must be greater than 0.");}
        console.groupEnd();    
    }
}

export default ValidationsPDF;