import { useState } from "react";
import "./App.scss";
import FileUpload from "./FileUpload";
import FileView from "./FileView";
import UploadButton from "./UploadButton";
import Sucess from "./Success";
import Error from "./Error";
function App() {
  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState(null);
  const url = files.length > 0 ? URL.createObjectURL(files[0]) : null;

  return (
    <div className="app">
      <FileUpload
        files={files}
        setFiles={setFiles}
        setError={setError}
        setStatus={setStatus}
      />
      {error && <Error error={error} />}

      {url && !status && (
        <>
          <FileView url={url} />
          <UploadButton
            file={files[0]}
            setIsUploading={setIsUploading}
            isUploading={isUploading}
            setError={setError}
            setStatus={setStatus}
          />
        </>
      )}

      {status && <Sucess />}
    </div>
  );
}

export default App;
