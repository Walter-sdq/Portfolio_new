// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './folder.css'
import '../../assets/imgs/image.png'
import Draggable from 'react-draggable';

const Folders = ({ items }) => {

    return (
        <div className="folderItems">
        {items.map((item) => (
                    <Draggable>
                    <div className="folder folderItem" key={item.id}>
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