import { useEffect } from "react";
import useFetch from "../ext-hooks/useFetch.component";
import Folders from "../folder/folders.component";
import Plank from "../global/plank";
import Status from "../global/status";


const Home = (props) => {

    const {
        data: items,
        loading,
        err,
        handleDelete
    } = useFetch('http://localhost:8000/folders')


    return (
        <div className="Home">
            <Status />
            <div className="homePaddn">

                <div className="homeMain">
                    {err && <div>{err}</div>}

                    {
                        loading &&
                        <div className="loading">Loading Items</div>
                    }

                    {items &&
                        <Folders
                            items={items}
                            itemType='folder'
                        />
                    }


                </div>

            </div>
            <Plank />
        </div>
    );
}

export default Home;