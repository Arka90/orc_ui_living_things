import axios from "axios";
import "./UploadButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
function UploadButton({
  file,
  setIsUploading,
  isUploading,
  setError,
  setStatus,
}) {
  async function uploadFile() {
    try {
      setIsUploading(true);
      setError(null);
      const formData = new FormData();
      formData.append("newFile", file, file.name);
      await axios.post("http://localhost:8080/upload", formData);
      setStatus("uploaded");
    } catch (err) {
      setError(err);
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <button
      onClick={() => uploadFile()}
      className="upload_button"
      disabled={isUploading}
    >
      {isUploading ? (
        <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
      ) : (
        "Upload"
      )}
    </button>
  );
}

export default UploadButton;
