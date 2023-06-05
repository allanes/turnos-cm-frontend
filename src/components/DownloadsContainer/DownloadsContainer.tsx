import React from 'react'
import qrIcon from '../../assets/icons/qr-code-scan.svg'
import { QrService } from '../../codegen_output/services/QrService';

export const DownloadsContainer = () => {
  
    const downloadQR = async () => {
        try {
            const response = await fetch('/descargar_qr', {
                method: 'GET',
                headers: {
                'Accept': 'application/pdf',
                },
            });
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'qr_medicos.pdf'); // or any other filename you want
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('An error occurred while fetching the QR code:', error);
        }
  };

  return (
    <button className="btn btn-primary" onClick={downloadQR}>
      <img src={qrIcon} alt="QR Icon" style={{ width: '20px', marginRight: '10px' }} />
      Descargar QR para médicos
    </button>
  );
};
