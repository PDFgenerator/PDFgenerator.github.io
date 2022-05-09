import { jsPDF } from "jspdf";
import { DataService } from "./DataService";
import { DateTime } from "./Date";
import logo from "../Assets/logo.png";
import telefono from "../Assets/telefono.png";
import mail from "../Assets/mail.png";
import Rounder from "./Rounder";

function PDF() {
    const doc = new jsPDF();
    // console.log(doc.getFontList())
    Rounder();

    const Font = (type) => { doc.setFont("Helvetica", type); }
    const Size = (num) => { doc.setFontSize(num); }

    const Title = () => {
        Size(14)
        Font("Bold")
        doc.text("Fasana Export - Import S.L.", 6 , 12);
        doc.line(6, 13, 105, 13);
    }

    const Date = () => {
        Size(10)
        doc.text("DATE", 141 , 12);
        doc.line(141, 13, 151, 13);
        
        Size(10.5)
        Font("")
        doc.text(DateTime().date, 141 , 17.5);
    }

    const Time = () => {
        Size(10)
        Font("Bold")
        doc.text("TIME", 171 , 12);
        doc.line(171, 13, 180, 13);
        
        Size(10.5)
        Font("")
        doc.text(DateTime().time, 171 , 17.5);
    }

    /* Logo */
    const Logo = () => {
        doc.addImage(logo, "PNG", 10, 18, 54, 15, "logo", "NONE", 0);
    }

    const Proforma_Invoice = () => {
        Size(10)
        Font("Bold")
        doc.text("PROFORMA INVOICE", 88, 25);
        doc.line(88, 26, 124, 26);
        
        /* Code */
        Size(11)
        doc.text(DataService.header.proformaInvoice.code, 80, 31);
        
        /* Date */    
        Size(10.5)
        doc.text(DateTime().date, 114 , 31);
        
        /* Page IF CONDITIONAL */
        Size(10)
        Font("")
        doc.text(`PAGE: ${DataService.header.proformaInvoice.page}`, 98, 36);
    }

    const Delivery_Adress = () => {
        Size(11)
        Font("Bold")
        doc.text("--- Delivery Adress ---", 30, 47);
        doc.line(6, 48, 95, 48);
        
        Font("")
        doc.text(`${DataService.header.deliveryAdress.code}`, 15, 53);
        doc.text(`${DataService.header.deliveryAdress.adress}`, 15, 58);
        doc.text(`${DataService.header.deliveryAdress.country}`, 15, 80);
    }

    const Invoice_Adress = () => {
        Size(11)
        Font("Bold")
        doc.text("--- Invoice Adress ---", 141, 47);
        doc.line(114, 48, 200, 48);
        
        Font("")
        doc.text(`${DataService.header.invoiceAdress.code}`, 127, 53);
        doc.text(`${DataService.header.invoiceAdress.adress}`, 127, 58);
        doc.text(`${DataService.header.invoiceAdress.country}`, 127, 80);
    }

    const Header_Table = () => {
        doc.text("Delivery:", 6, 93)
        doc.text("REF.OC D-3*2021", 6, 97.5)
        
        doc.text("Invoice:", 63, 93)
        
        doc.text("PAYMENT: 50% pay cash up front 50% CAD", 105, 93)
        doc.text("PAYMENT INSTRUMENT: L/C", 105, 97.6)
    }

    const Table = (paramInit, paramFinal) => {
        const headers = [
            'CODE',
            'DESCRIPTION',
            'CASES',
            'UNITS',
            'NET_W',
            'GROSS_W',
            'PRICE',
            'AMOUNT',
        ]
        
        const rows = () => {
            let rows = DataService.table;
            let rows12 = [];
            let result = [];
            for (let i = paramInit; i < paramFinal; i++) {
                rows12.push(rows[i])
            }


            rows12.forEach(row => {
                let pdfRow = {
                    CODE: row.code.toString(),
                    DESCRIPTION: row.description.toString(),
                    CASES: row.cases.toString(),
                    UNITS: row.un.toString(),
                    NET_W: row.net.toString(),
                    GROSS_W: row.gross.toString(),
                    PRICE: row.price.toString(),
                    AMOUNT: row.amount.toString(),
                }
                result.push(pdfRow)
            })
            return result;
        }
        
        // doc.cell("center")
        
        doc.table(6, 100, rows(), headers, 
            { 
                autoSize: true,
                fontSize: 9.2, 
                padding: 2, 
                margins: {width: 90},
                headerBackgroundColor: "#ebebeb" 
            }
        )
    }
    
    const Totals = () => {
        Size(12)
        Font("bold")
        doc.text("Total Amount USD", 114.5, 210)
        doc.text(`${DataService.totals.amount}`, 198, 210, {align: "right"})

        Size(11)
        Font("")
        doc.text("CFR: CHITTAGONG", 6, 220)
        doc.text("CONTAINER TYPE", 6, 224.5)
        doc.text("COMMENTS:", 6, 247)
        doc.text("20FT SLIP", 6, 251.5)

        doc.text("VAT...................................:", 114.5, 220)
        doc.text(`${DataService.totals.vat}`, 198, 220, {align: "right"})
        doc.text("GROOS WEIGHT.............:", 114.5, 224.5)
        doc.text(`${Math.round10(DataService.totals.gross, -3)}`, 198, 224.5, {align: "right"})
        doc.text("NEW WEIGHT..................:", 114.5, 229)
        doc.text(`${Math.round10(DataService.totals.net, -3)}`, 198, 229, {align: "right"})
        doc.text("TOTAL CASES.................:", 114.5, 233.5)
        doc.text(`${DataService.totals.cases}`, 198, 233.5, {align: "right"})
        doc.text("TOTAL UNITS...................:", 114.5, 238)
        doc.text(`${DataService.totals.un}`, 198, 238, {align: "right"})
        doc.text("TOTAL LITERS.................:", 114.5, 242.5)
        doc.text(`${DataService.totals.totalLiters}`, 198, 242.5, {align: "right"})
    }

    const Footer = () => {
        Size(13)
        Font("Bold")
        doc.line(8, 270, 70, 270);
        doc.text("Fasana Export-Import S.L.", 77, 271);
        doc.line(140, 270, 202, 270);

        Size(11)
        Font("")
        doc.text(`${DataService.footer.code}`, 95, 277)
        doc.text(`${DataService.footer.direction}`, 63, 281.5)
        
        doc.addImage(telefono, "PNG", 61, 282.5, 4, 4, "telefono", "NONE", 0);
        doc.text(`${DataService.footer.numberPhone}`, 66, 285.5);
        doc.addImage(mail, "PNG", 103, 283, 4, 3, "mail", "NONE", 0);
        doc.text(`${DataService.footer.email}`, 108, 285.5);
    }


    let numPages = Math.ceil10(DataService.table.length / 12)

    const MorePages = () => {    
        let totalRows = DataService.table.length;
        let rest = totalRows % 12
        console.log(totalRows, rest)
        Page(0, 12)

        MidPages(totalRows)

        doc.addPage()
        FinalPage(totalRows - rest)
    }
    const Page = (paramInit, paramFinal) => {
        Title()
        Logo()
        Date()
        Time()
        Proforma_Invoice()
        Delivery_Adress()
        Invoice_Adress()
        Header_Table()
        Table(paramInit, paramFinal)
        Footer()
    }
    const MidPages = (totalRows) => {
        let arrayI = [];

        for (let i = 0; i < totalRows; i++) {
            if ( i % 12 === 0 ) arrayI.push(i)
        }
        console.log(arrayI)

        for (let i = 1; i < numPages-1; i++) {
            doc.addPage()   
            Page(arrayI[i], arrayI[i+1])
            console.log("a")
        }
    }
    const FinalPage = (paramInit) => {       
        Title()
        Logo()
        Date()
        Time()
        Proforma_Invoice()
        Delivery_Adress()
        Invoice_Adress()
        Header_Table()
        Table(paramInit, DataService.table.length)
        Totals()
        Footer()
    }

    numPages > 1 ? MorePages() : FinalPage()
    
    

    doc.save(`Fasana_Invoice_${DateTime().date}.pdf`);
}

export default PDF;