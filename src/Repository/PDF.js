import { jsPDF } from "jspdf";

export function PDF() {
    const doc = new jsPDF();

        doc.text("Hello Word!", 10 , 10);
        doc.save("prueba1.pdf");
}