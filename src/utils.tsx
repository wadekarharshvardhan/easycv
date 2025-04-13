import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const generatePDF = async () => {
  const element = document.getElementById("resumeResult");

  if (!element) {
    console.error("Element with id 'resumeResult' not found.");
    return;
  }

  const canvas = await html2canvas(element, { scale: 2 });
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save("resume.pdf");
};