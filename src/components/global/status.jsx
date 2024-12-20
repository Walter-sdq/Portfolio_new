import Time from "../global/indicators/useTime.component";
import Power from "./indicators/power";
import Volume from "./indicators/volume";
import Battery from "./indicators/battery";
import Network from "../global/indicators/netSignal";
import Notification from "./indicators/notification";
import "./global.css";
import Menu from "./menu/menu";

const Status = () => {
  return (
    <div className="status">
      <div className="status-padd">
        <div className="status-main">
          <><Menu/></>
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
