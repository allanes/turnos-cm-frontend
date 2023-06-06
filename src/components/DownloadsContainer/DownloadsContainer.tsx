import React from 'react'
import qrIcon from '../../assets/icons/qr-code-scan.svg'
import pdfIcon from '../../assets/icons/filetype-pdf.svg'
import { DownloadsService } from '../../codegen_output/services/DownloadsService';

export const DownloadsContainer = () => {

  const handleDownloadPdf = async (response: Response, nombre_descarga: string) => {
    try {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', nombre_descarga); // or any other filename you want
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
          console.error('An error occurred while fetching the QR code:', error);
      }
  }
  
  const downloadQR = async () => {
      try {
          const response = await fetch('/descargar_qr', {
              method: 'GET',
              headers: {
              'Accept': 'application/pdf',
              },
          });
          await handleDownloadPdf(response, "qr_medicos.pdf");
      } catch (error) {
          console.error('An error occurred while fetching the QR code:', error);
      }
  };

  const downloadManualIniciarTeles = async () => {
    try {
        const response = await fetch('/descargar_manual_iniciar_teles', {
            method: 'GET',
            headers: {
            'Accept': 'application/pdf',
            },
        });
        handleDownloadPdf(response, "manual_iniciar_teles.pdf");
    } catch (error) {
        console.error('An error occurred while fetching the manual:', error);
    }
  }

  const downloadManualApagarTeles = async () => {
    try {
        const response = await fetch('/descargar_manual_apagar_teles', {
            method: 'GET',
            headers: {
            'Accept': 'application/pdf',
            },
        });
        handleDownloadPdf(response, "manual_apagar_teles.pdf");
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
