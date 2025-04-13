import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const generatePDF = async () => {
  const element = document.getElementById("resumeResult");

  if (!element) {
    console.error("Element with id 'resumeResult' not found.");
    return;
  }

  const pdf = new jsPDF("p", "mm", "a4");
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  const canvas = await html2canvas(element, { scale: 2 });
  const imgData = canvas.toDataURL("image/png");

  let imgHeight = (canvas.height * pdfWidth) / canvas.width;
  let heightLeft = imgHeight;
  let position = 0;

  // Add the first page
  pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
  heightLeft -= pdfHeight;

  // Add additional pages if content overflows
  while (heightLeft > 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
    heightLeft -= pdfHeight;
  }

  pdf.save("resume.pdf");
};
