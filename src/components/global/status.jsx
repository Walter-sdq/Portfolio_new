import Time from "../global/indicators/useTime.component";
import "./global.css";
import Power from "./indicators/power";
import Volume from "./indicators/volume";
import Battery from "./indicators/battery";
import Notification from "./indicators/notification";
import Network from "../global/indicators/netSignal";

const Status = () => {

  return (
    <div className="status">
      <div className="status-padd">
        <div className="status-main">
          <div className="nav menu btn">
            <i className="fab fa-ubuntu"></i>
            <p>menu</p>
          </div>
          <div className="indicators statsInfo">
            <div className=""></div>

            <>
              <Network />
            </>

            <>
              <Notification />
            </>

            <>
              <Battery />
            </>

            <>
              <Volume />
            </>

            <div className="clock time" title="Time">
              <Time />
            </div>
            <>
              <Power />
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
