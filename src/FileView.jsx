import { Viewer, Worker } from "@react-pdf-viewer/core";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "./FileView.scss";

function FileView({ url }) {
  return (
    <div className="viewer-container">
      <div
        style={{
          width: "400px",
        }}
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.8.162/build/pdf.worker.min.js">
          <Viewer fileUrl={url} />
        </Worker>
      </div>
    </div>
  );
}

export default FileView;
