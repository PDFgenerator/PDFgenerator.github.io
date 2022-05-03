import { jsPDF } from "jspdf";
import { DateTime } from "./Date";
import logo from "../Assets/logo.png";

function PDF() {
    const doc = new jsPDF();
    // console.log(doc.getFontList())

    /* Title */
    doc.setFontSize(13);
    doc.setFont("Helvetica", "Bold");
    doc.text("Fasana Export - Import S.L.", 6 , 12);
    doc.line(6, 13, 105, 13);

    /* Date */
    doc.setFontSize(10);
    doc.setFont("Helvetica", "Bold");
    doc.text("DATE", 141 , 12);
    doc.line(141, 13, 151, 13);

    doc.setFontSize(10.5);
    doc.setFont("Helvetica", "");
    doc.text(DateTime().date, 141 , 17.5);

    /* Time */
    doc.setFontSize(10);
    doc.setFont("Helvetica", "Bold");
    doc.text("TIME", 171 , 12);
    doc.line(171, 13, 181, 13);

    doc.setFontSize(10.5);
    doc.setFont("Helvetica", "");
    doc.text(DateTime().time, 171 , 17.5);

    /* Logo */
    doc.addImage(logo, "PNG", 10, 18, 54, 15, "logo", "NONE", 0);


    doc.save("prueba1.pdf");
}

export default PDF;