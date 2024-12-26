// import "./folder.css";
// import "../../assets/imgs/image.png";
// import Draggable from "react-draggable";
// import { useEffect } from "react";

// const Folders = ({ items, onFolderOpen }) => {
//   useEffect(() => {  }, [items]);

//   return (
//     <div className="folderItems">
//       {items.map((item) => (
//         <Draggable key={item.id}>
//           <div
//             className="folder folderItem"
//             onDoubleClick={() => onFolderOpen(item)} // Pass folder data here
//           >
//             <div className="folderContnt folderImg">
//               <i className="far fa-folder"></i>
//             </div>
//             <p className="folderName">{item.name}</p>
//           </div>
//         </Draggable>
//       ))}
//     </div>
//   );
// };

// export default Folders;






import React, { useEffect } from "react";
import Draggable from "react-draggable";
import "./folder.css";

const Folders = ({ items, onFolderOpen }) => {
  useEffect(() => {}, [items]);

  return (
    <div className="folderItems">
      {items.map((item) => (
        <Draggable key={item.id}>
          <div
            className="folder folderItem"
            onDoubleClick={() => onFolderOpen(item)} // Pass folder data here
          >
            <div className="folderContnt folderImg">
              <i className="far fa-folder"></i>
            </div>
            <p className="folderName">{item.name}</p>
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default Folders;
