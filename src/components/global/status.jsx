import { useEffect, useState } from 'react';
import Time from '../ext-hooks/useTime.component';
import './global.css'
import useNetworkStatus from '../ext-hooks/useStatus.component'

const Status = () => {

    const [volume, setVolume] = useState(true)
    const [mute, setMute] = useState(true)

    const toggleMute = () => {
        setMute(!mute)
    }

    const toggleVolume = () => {
        setVolume(!volume)
    }

    const isOnline = useNetworkStatus();

    return (
        <div className="status">
            <div className="status-padd">
                <div className="status-main">
                    <div className="nav menu btn">
                        <i className="fab fa-ubuntu"></i><p>menu</p>
                    </div>
                    <div className="indicators statsInfo">
                        <div className=''></div>

                        <div className='netSignal' title='Network status'>{isOnline
                            ?
                            <i className="fas fa-signal"></i>
                            :
                            <i className="far fa-rectangle-xmark"></i>}</div>

                        <div className='notification mute' onClick={toggleMute}>{mute
                            ? <i className="far fa-bell" title='Do not disturb'></i>
                            :
                            <i className="far fa-bell-slash " title='Allow notification' ></i>}</div>

                        <div className='battery ' title='Battery Status'>
                            <i className="batt fas fa-battery-full"></i><span> (100%)</span> 
                             </div>

                        <div className='volume ' onClick={toggleVolume}>
                            {volume
                            ? <i className="fas fa-volume-high" title='Mute'></i>
                            : <i className="fas fa-volume-xmark" title='Allow sound'></i>}
                            </div>

                        <div className='clock time' title='Time'><Time /></div>

                        <div className='powerbtn btn' title='Power'><i className="fas fa-power-off"></i></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Status;