// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './folder.css'
import '../../assets/imgs/image.png'
import Draggable from 'react-draggable';

const Folders = ({ items }) => {

    return (
        <div className="folderItems">
        {items.map((item) => (
                    <Draggable key={item.id}>
                    <div className="folder folderItem">
                        <div className="folderContnt folderImg">
                            <i className="far fa-folder"></i>
                        </div>
                        <p className="folderName">{item.name}</p>
                    </div >
                    </Draggable>
                ))}
            </div>
    );
}

export default Folders;