import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const generatePDF = async () => {
  const element = document.getElementById("resumeResult");

  if (!element) {
    console.error("Element with id 'resumeResult' not found.");
    return;
  }

  // Use html2canvas to render the element
  const canvas = await html2canvas(element, {
    scale: 2, // Higher scale for better quality
    useCORS: true, // Handle cross-origin issues
  });

  const imgData = canvas.toDataURL("image/png");

  // Calculate the dimensions of the PDF
  const pdf = new jsPDF("p", "mm", "a4");
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  // Scale the content to fit the A4 page
  const contentWidth = canvas.width;
  const contentHeight = canvas.height;
  const scaleFactor = Math.min(pdfWidth / contentWidth, pdfHeight / contentHeight);

  const scaledWidth = contentWidth * scaleFactor;
  const scaledHeight = contentHeight * scaleFactor;

  // Center the content on the PDF page
  const xOffset = (pdfWidth - scaledWidth) / 2;
  const yOffset = (pdfHeight - scaledHeight) / 2;

  pdf.addImage(imgData, "PNG", xOffset, yOffset, scaledWidth, scaledHeight);
  pdf.save("resume.pdf");
};

