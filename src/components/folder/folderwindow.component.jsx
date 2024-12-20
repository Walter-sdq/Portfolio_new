import Draggable from "react-draggable";
import "./folder.css";

const FolderWindow = ({ folder, onClose }) => {
  // Function to handle opening a file
  const handleFileOpen = (file) => {
    if (file.type === "file") {
      // Open the file using its actual path
      window.open(file.path, "_blank");
    }
  };

  return (
    <Draggable>
      <div className="folder-window">
        <div className="folder-header">
          <h3>{folder.name}</h3>
          <span className="button" onClick={onClose}><i className="fas fa-x"></i></span>
        </div>
        <div className="folder-contents">
          {folder.contents && folder.contents.length > 0 ? (
            folder.contents.map((item) => (
              <div
                key={item.id}
                className="folder-item"
                onDoubleClick={() => handleFileOpen(item)}
              >
                {item.type === "folder" ? (
                  <div className="subfolder">
                    <i className="far fa-folder"></i>
                    <p>{item.name}</p>
                  </div>
                ) : (
                  <div className="file">
                    <i className="far fa-file"></i>
                    <p>{item.name}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>This folder is empty</p>
          )}
        </div>
      </div>
    </Draggable>
  );
};

export default FolderWindow;
