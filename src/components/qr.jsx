import React, { useRef } from "react";
import QRCode from "react-qr-code";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
// import ./.css"; // Import external CSS
// import "./index.css";


const QRCodeGenerator = ({ text }) => {
  const qrRef = useRef(null);
  if(!text){
    return <div className="qr-box">Your QR code will appear here</div>
   
  }

  // Function to download QR Code as png
const downloadQRCode = () => {
    domtoimage.toPng(qrRef.current)
      .then((dataUrl) => {
        saveAs(dataUrl, "qrcode.png");
      })
      .catch((error) => console.error("Error generating QR Code image:", error));
  };

``
  return (
    <div className="qr-container">
      {text && (
        <>
          <div ref={qrRef} className="qr-box">
            <QRCode value={text} size={200} />
          </div>
          
          <button onClick={downloadQRCode} className="download-btn">
            Download QR Code
          </button>
        </>
      )}
    </div>
  );
};

export default QRCodeGenerator;
