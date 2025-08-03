function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Tambahkan konten
    doc.text("Hasil Tes MINDWAY", 20, 20);
    doc.addImage(chartImage, 'PNG', 15, 30, 180, 100);
    
    // Simpan PDF
    doc.save('hasil-mindway.pdf');
}
