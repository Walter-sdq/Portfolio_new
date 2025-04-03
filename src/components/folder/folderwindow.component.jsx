// import Draggable from "react-draggable";
// import "./folder.css";
// // import { useEffect } from "react";

// const FolderWindow = ({ folder, onClose, onFolderOpen }) => {
//   // useEffect(() => {}, [folder]);
//   console.log(folder);

//   // Function to handle opening a file
//   const handleContOpen = (file, folder) => {
//     if (file.type === "file") {
//       // Open the file using its actual path
//       window.open(file.path, "_blank");
//       console.log(file);
//       // console.log(folder.contents + "kkk");
//       // console.log(folder.contents + "kkk");
//     } else if (file.type === "folder") {
//       // window.open(folder.path, "_blank");
//       console.log(folder.id);

//       console.log(folder);
//     }

//     console.log(file,folder);

//   };

//   // const handleFolderOpen = (folder) => {
//   //   // Check if the folder is already open
//   //   if (!openFolders.some((f) => f.id === folder.id)) {
//   //     setOpenFolders((prevFolders) => [...prevFolders, folder]);
//   //   }
//   // };

//   // // Function to close a folder window
//   // const handleFolderClose = (folderId) => {
//   //   setOpenFolders((prevFolders) =>
//   //     prevFolders.filter((f) => f.id !== folderId)
//   //   );
//   // };

//   return (
//     <Draggable>
//       <div className="folder-window">
//         <div className="folder-header">
//           <h3>{folder.name}</h3>
//           <span className="button" onClick={onClose}>
//             <i className="fas fa-x"></i>
//           </span>
//         </div>
//         <div className="folder-contents">
//           {folder.contents && folder.contents.length > 0 ? (
//             folder.contents.map((item) => (
//               <div
//                 key={item.id}
//                 className="folder-item"
//                 onDoubleClick={() => handleContOpen(item)}
//               >
//                 {item.type === "folder" ? (
//                   <div className="subfolder">
//                     <i className="far fa-folder"></i>
//                     <p>{item.name}</p>
//                   </div>
//                 ) : (
//                   <div className="file">
//                     <i className="far fa-file"></i>
//                     <p>{item.name}</p>
//                   </div>
//                 )}
//               </div>
//             ))
//           ) : (
//             <p>This folder is empty</p>
//           )}
//         </div>
//       </div>
//     </Draggable>
//   );
// };

// export default FolderWindow;

import Draggable from "react-draggable";
import { useState } from "react";
import "./folder.css";

/**
 * Renders a draggable folder window component that displays the contents of a folder
 * and allows navigation through subfolders.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.folder - The root folder object to display.
 * @param {string} props.folder.name - The name of the folder.
 * @param {Array} props.folder.contents - An array of file and subfolder objects in the folder.
 * @param {Function} props.onClose - Callback function to close the folder window.
 * @returns {JSX.Element} A draggable div containing the folder window UI.
 */
const FolderWindow = ({ folder, onClose }) => {
  const [currentFolder, setCurrentFolder] = useState(folder); // Track the current folder

  /**
   * make folderwindow come up of other window
   */
  const [style, setStyle] = useState({});
  const goTop = (e) => {
    console.log(e);
    setStyle({
      zIndex: 1100,
    });
    console.log(style);
  };

  /**
   * Handles opening a file or navigating into a subfolder.
   *
   * @param {Object} item - The file or folder item to open.
   * @param {string} item.type - The type of the item ('file' or 'folder').
   * @param {string} item.path - The path of the file (for files only).
   */
  const handleContentOpen = (item) => {
    if (item.type === "file") {
      // Open file in a new tab
      window.open(item.path, "_blank");
    } else if (item.type === "folder") {
      // Navigate into the subfolder
      setCurrentFolder(item);
    }
  };

  /**
   * Handles navigating back to the parent folder.
   */
  const handleBack = () => {
    if (currentFolder !== folder) {
      const parentFolder = findParentFolder(folder, currentFolder.id);
      setCurrentFolder(parentFolder);
    }
  };

  /**
   * Recursively finds the parent folder of a given folder ID.
   *
   * @param {Object} root - The root folder to start the search from.
   * @param {string} id - The ID of the folder to find the parent for.
   * @returns {Object|null} The parent folder object if found, null otherwise.
   */
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
  );
};

export default FolderWindow;
