import { useState } from "react";

const Volume = () => {

    const [volume, setVolume] = useState(true)


    const toggleVolume = () => {
        setVolume(!volume)
    }

    return (
        <div className='volume ' onClick={toggleVolume}>
            {volume
                ? <i className="fas fa-volume-high" title='Mute'></i>
                : <i className="fas fa-volume-xmark" title='Allow sound'></i>}
        </div>
    );
}

export default Volume;