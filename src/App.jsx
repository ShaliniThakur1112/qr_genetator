import React, { useState } from "react";
import QRCodeGenerator from "./components/qr";
import "./index.css";

// import "./styles/styles.css"; // Import external CSS

export const App=()=> {
  const [text, setText] = useState("");

  return (
    <div className="container">
      <h1 className="heading">QR Code Generator</h1>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input-field"
      />

      {/* QR Code Component */}
      <QRCodeGenerator text={text} />
    </div>
  );
}

export default App;
