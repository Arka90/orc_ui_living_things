import "./Error.scss";
function Error({ error }) {
  return (
    <div className="error-container">
      <h3>Something Went wrong</h3>
      <p>{error.message}</p>
    </div>
  );
}

export default Error;
