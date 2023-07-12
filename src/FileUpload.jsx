import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FileUpload.scss";

function FileUpload({ setFiles, files, setError, setStatus }) {
  function uploadHandler(e) {
    setStatus(null);
    setError(null);
    setFiles([]);
    const file = e.target.files[0];
    setFiles([file]);
  }
  console.log(files);
  return (
    <div className="file-card">
      <p className="title">Upload File</p>
      <div className="file-inputs">
        <input type="file" onChange={uploadHandler} accept="application/pdf" />
        <button>
          <i>
            <FontAwesomeIcon icon={faPlus} />
          </i>
          Select PDF
        </button>
      </div>
      <p className="main">Only PDF Files are Supported</p>
    </div>
  );
}

export default FileUpload;
