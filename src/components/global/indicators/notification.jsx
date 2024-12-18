import { useState } from "react";

const Notification = () => {

    const [mute, setMute] = useState(true)

    const toggleMute = () => {
        setMute(!mute)
    }

    return (
        <div className='notification mute' onClick={toggleMute}>{mute
            ? <i className="far fa-bell" title='Do not disturb'></i>
            :
            <i className="far fa-bell-slash " title='Allow notification' ></i>}
        </div>
    );
}

export default Notification;