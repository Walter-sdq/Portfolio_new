import { useState, useEffect } from "react";
import { jsonData } from "../../utils/data"; // Corrected path to data.js
import Folders from "../folder/folders.component";
import Plank from "../global/plank";
import Status from "../global/status";
import FolderWindow from "../folder/folderwindow.component";

const Home = (props) => {
  const [items, setItems] = useState(null); // State for folder items
  const [loading, setLoading] = useState(true); // Loading state
  const [openFolders, setOpenFolders] = useState([]); // State for opened folder windows

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setItems(jsonData.folders); // Set folders after delay
      setLoading(false); // Stop loading
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  // Function to handle opening a folder window on double-click
  const handleFolderOpen = (folder) => {
    if (!openFolders.some((f) => f.id === folder.id)) {
      setOpenFolders((prevFolders) => [...prevFolders, folder]);
    }
  };

  // Function to close a folder window
  const handleFolderClose = (folderId) => {
    setOpenFolders((prevFolders) =>
      prevFolders.filter((f) => f.id !== folderId)
    );
  };

  return (
    <div className="Home">
      <Status />
      <div className="homePaddn">
        <div className="homeMain">
          {loading ? (
            <div className="loading">
              Loading folders{" "}
              <span className="loadIco">
                <i className="fab fa-ubuntu"></i>
              </span>
            </div>
          ) : (
            <Folders
              items={items}
              itemType="folder"
              onFolderOpen={handleFolderOpen} // Pass the open folder handler
            />
          )}
        </div>
      </div>

      <Plank />

      {/* Render folder windows for each opened folder */}
      {openFolders.map((folder) => (
        <FolderWindow
          key={folder.id}
          folder={folder}
          onClose={() => handleFolderClose(folder.id)} // Close window handler
        />
      ))}
    </div>
  );
};

export default Home;
