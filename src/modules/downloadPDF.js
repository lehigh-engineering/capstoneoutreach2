import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

// Function to save content as PDF
export const saveAsPDF = (selector, fileName = 'Document.pdf', setIsDownloading) => {
    setIsDownloading(true); 
    const button = document.querySelector('button');
    button.style.display = 'none'; 

    const input = document.querySelector(selector);
    const originalStyles = input.getAttribute("style");

    //temporarily apply the width for the canvas rendering
    const temporaryContainer = input.cloneNode(true); 
    temporaryContainer.style.width = "850px"; 
    temporaryContainer.style.zoom = "1"; 
    temporaryContainer.style.height = "auto"; 

    document.body.appendChild(temporaryContainer);

    // Use html2canvas on the cloned element with the specified width
    html2canvas(temporaryContainer, { 
        useCORS: true, 
        allowTaint: true, 
        scrollY: 0, 
        ignoreElements: (element) => {
            return element.tagName === 'BUTTON';
        }
    }).then((canvas) => {
        const image = { type: 'jpeg', quality: 0.98 };
        const margin = [0.5, 0.5];  
        var imgWidth = 8.5;
        var pageHeight = 11;
  
        var innerPageWidth = imgWidth - margin[0] * 2;
        var innerPageHeight = pageHeight - margin[1] * 2;
  
        // Calculate the number of pages.
        var pxFullHeight = canvas.height;
        var pxPageHeight = Math.floor(canvas.width * (pageHeight / imgWidth));
        var nPages = Math.ceil(pxFullHeight / pxPageHeight);
  
        // Define pageHeight separately so it can be trimmed on the final page.
        var pageHeight = innerPageHeight;
  
        // Create a one-page canvas to split up the full image.
        var pageCanvas = document.createElement('canvas');
        var pageCtx = pageCanvas.getContext('2d');
        pageCanvas.width = canvas.width;
        pageCanvas.height = pxPageHeight;
  
        // Initialize the PDF.
        var pdf = new jsPDF('p', 'in', [8.5, 11]);
  
        for (var page = 0; page < nPages; page++) {
          // Trim the final page to reduce file size.
          if (page === nPages - 1 && pxFullHeight % pxPageHeight !== 0) {
            pageCanvas.height = pxFullHeight % pxPageHeight;
            pageHeight = (pageCanvas.height * innerPageWidth) / pageCanvas.width;
          }
  
          // Display the page.
          var w = pageCanvas.width;
          var h = pageCanvas.height;
          pageCtx.fillStyle = 'white';
          pageCtx.fillRect(0, 0, w, h);
          pageCtx.drawImage(canvas, 0, page * pxPageHeight, w, h, 0, 0, w, h);
  
          // Add the page to the PDF.
          if (page > 0) pdf.addPage();
          var imgData = pageCanvas.toDataURL('image/' + image.type, image.quality);
          pdf.addImage(imgData, image.type, margin[1], margin[0], innerPageWidth, pageHeight);
        }
  
        // Save the generated PDF
        pdf.save(fileName);
        setIsDownloading(false); // Set downloading state to false

        // Restore original styles of the input element
        if (originalStyles) {
            input.setAttribute("style", originalStyles);
        } else {
            input.removeAttribute("style");
        }

        // Remove the temporary container from the DOM
        document.body.removeChild(temporaryContainer);
    });
};
