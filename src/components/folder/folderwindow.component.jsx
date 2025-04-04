import Draggable from "react-draggable";
import { useState } from "react";
import "./folder.css";
import ViewerModal from "../../Files/viewerModal.component";

const FolderWindow = ({ folder, onClose }) => {
  const [currentFolder, setCurrentFolder] = useState(folder); // Track the current folder
  const [style, setStyle] = useState({}); // Style for z-index
  const [selectedFile, setSelectedFile] = useState(null); // Track the selected file for modal

  const goTop = (e) => {
    setStyle({
      zIndex: 1100,
    });
  };

  const handleContentOpen = (item) => {
    if (item.type === "file") {
      // Open file in the ViewerModal
      setSelectedFile(item);
    } else if (item.type === "folder") {
      // Navigate into the subfolder
      setCurrentFolder(item);
    }
  };

  const handleBack = () => {
    if (currentFolder !== folder) {
      const parentFolder = findParentFolder(folder, currentFolder.id);
      setCurrentFolder(parentFolder);
    }
  };

  const findParentFolder = (root, id) => {
    for (const item of root.contents) {
      if (item.id === id) return root;
      if (item.type === "folder") {
        const found = findParentFolder(item, id);
        if (found) return found;
      }
    }
    return null;
  };

  return (
    <>
      <Draggable>
        <div className="folder-window" style={style} onClick={goTop}>
          <div className="folder-header">
            <h3>{currentFolder.name}</h3>
            <span className="button" onClick={onClose}>
              <i className="fas fa-x"></i>
            </span>
          </div>
          <div className="folder-contents">
            {currentFolder !== folder && (
              <button className="back-button" onClick={handleBack}>
                Back
              </button>
            )}
            {currentFolder.contents && currentFolder.contents.length > 0 ? (
              currentFolder.contents.map((item) => (
                <div
                  key={item.id}
                  className="folder-item"
                  onDoubleClick={() => handleContentOpen(item)}
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

      {/* ViewerModal for displaying file content */}
      {selectedFile && (
        <ViewerModal
          content={selectedFile} // Pass the selected file
          onClose={() => setSelectedFile(null)} // Close the modal
        />
      )}
    </>
  );
};

export default FolderWindow;