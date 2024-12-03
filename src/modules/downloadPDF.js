// pdfUtils.js

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

// Function to save content as PDF
export const saveAsPDF = (selector, fileName = 'Document.pdf', setIsDownloading) => {
    setIsDownloading(true); // Set downloading state to true
    const button = document.querySelector('button');
    // button.style.display = 'none';

    const input = document.querySelector(selector);

    html2canvas(input, {
        ignoreElements: (element) => {
            return element.tagName === 'BUTTON';
        }
    }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const topMargin = 15;
        const bottomMargin = 15;
        const imgWidth = pdfWidth - 2 * topMargin;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = topMargin;

        pdf.addImage(imgData, 'PNG', topMargin, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight - topMargin - bottomMargin;
        while (heightLeft >= 0) {
            position -= pdfHeight - bottomMargin;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', topMargin, position, imgWidth, imgHeight);
            heightLeft -= pdfHeight - topMargin - bottomMargin;
        }

        pdf.save(fileName);
        setIsDownloading(false); // Set downloading state to false
        // button.style.display = 'block';
    });
};
