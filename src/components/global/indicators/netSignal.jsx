import useNetworkStatus from "../../ext-hooks/useStatus.hook";

const Network = () => {

    const isOnline = useNetworkStatus()
    
    return (
        <div className='netSignal' title='Network status'>{
            isOnline
                ?
                <i className="fas fa-signal"></i>
                :
                <i className="far fa-rectangle-xmark"></i>}
        </div>
    );
}

export default Network;