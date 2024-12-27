import { useState } from "react";
import useFetch from "../ext-hooks/useFetch.hook";
import Folders from "../folder/folders.component";
import Plank from "../global/plank";
import Status from "../global/status";
import FolderWindow from "../folder/folderwindow.component";

const Home = (props) => {
  const {
    data: items,
    loading,
    err,
  } = useFetch("http://localhost:8000/folders");

  const [openFolders, setOpenFolders] = useState([]); // State for opened folder windows

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
          {err && <div>{err}</div>}

          {loading && (
            <div className="loading">
              Loading Items{" "}
              <span className="loadIco">
                <i className="fab fa-ubuntu"></i>
              </span>
            </div>
          )}

          {items && (
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
