import { useState } from "react";
import useFetch from '../ext-hooks/useFetch.hook'
import Folders from "../folder/folders.component";
import Plank from "../global/plank";
import Status from "../global/status";
import FolderWindow from '../folder/folderwindow.component'; // New FolderWindow component

const Home = (props) => {
    // State for opened folder windows
    const [openFolders, setOpenFolders] = useState([]); 

    const {
        data: items,
        loading,
        err
    } = useFetch('http://localhost:8000/folders');

    // Function to handle opening a folder window on double-click
    const handleFolderOpen = (folder) => {
        setOpenFolders((prevFolders) => [...prevFolders, folder]);
    };

    // Function to close a folder window
    const handleFolderClose = (folderId) => {
        setOpenFolders((prevFolders) => prevFolders.filter(f => f.id !== folderId));
    };

    return (
        <div className="Home">
            <Status />
            <div className="homePaddn">
                <div className="homeMain">
                    {err && <div>{err}</div>}
                    {loading && <div className="loading">Loading Items</div>}
                    {items && 
                        <Folders 
                            items={items} 
                            itemType='folder' 
                            onFolderOpen={handleFolderOpen} // Pass the open folder handler
                        />
                    }
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
}

export default Home;
