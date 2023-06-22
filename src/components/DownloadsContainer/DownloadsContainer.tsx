import React from 'react'
import qrIcon from '../../assets/icons/qr-code-scan.svg'
import pdfIcon from '../../assets/icons/filetype-pdf.svg'
import { DownloadsService } from '../../codegen_output/services/DownloadsService';

export const DownloadsContainer = () => {

  const handleDownloadPdf = async (target_url: string, nombre_descarga: string) => {
    fetch(target_url)
    .then(response => response.blob())
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = nombre_descarga;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
  }

  
  const downloadQR = async () => {
      try {
          await handleDownloadPdf(
            '/descargas/descargar_qr', 
            "qr_medicos.pdf"
          );
      } catch (error) {
          console.error('An error occurred while fetching the QR code:', error);
      }
  };

  const downloadManualIniciarTeles = async () => {
    try {
        await handleDownloadPdf(
          "/descargas/manual_iniciar_teles", 
          "manual_iniciar_teles.pdf"
        );
    } catch (error) {
        console.error('An error occurred while fetching the manual:', error);
    }
  }

  const downloadManualApagarTeles = async () => {
    try {
        await handleDownloadPdf(
          "/descargas/manual_apagar_teles", 
          "manual_apagar_teles.pdf"
        );
    } catch (error) {
        console.error('An error occurred while fetching the manual:', error);
    }
  }

  return (
    <div>

      <div>
        <button className="btn btn-outline-primary" onClick={downloadQR}>
          <img src={qrIcon} alt="QR Icon" style={{ width: '20px', marginRight: '10px' }} />
          QR para médicos
        </button>
      </div>
      <div>
        <button className="btn btn-outline-primary" onClick={downloadManualIniciarTeles}>
          <img src={pdfIcon} alt="QR Icon" style={{ width: '20px', marginRight: '10px' }} />
          Manual para Iniciar Teles
        </button>
      </div>
      <div>
        <button className="btn btn-outline-primary" onClick={downloadManualApagarTeles}>
          <img src={pdfIcon} alt="QR Icon" style={{ width: '20px', marginRight: '10px' }} />
          Manual para Apagar Teles
        </button>
      </div>
    </div>
  );
};
