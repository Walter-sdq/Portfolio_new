const ViewerModal = ({ content, onClose }) => {
    if (!content) return null;
  
    return (
      <div className="viewer-modal">
        <div className="viewer-header">
          <button onClick={onClose}>Close</button>
        </div>
        <div className="viewer-body">
          {content.type === "txt" && (
            <iframe src={content.path} title="Text Viewer"></iframe>
          )}
          {content.type === "pdf" && (
            <iframe src={content.path} title="PDF Viewer"></iframe>
          )}
          {["png", "jpg", "jpeg"].includes(content.type) && (
            <img src={content.path} alt="Image Viewer" />
          )}
        </div>
      </div>
    );
  };
  