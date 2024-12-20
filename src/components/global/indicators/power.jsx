import { useState } from "react";
import PowerPop from "../statusPops/powerPop";

const Power = () => {
  const [powerPop, setPowerPop] = useState(false);
  const togglePowerPop = () => {
    setPowerPop(!powerPop);
  };

  return (
    <>
      <div className="powerbtn btn" title="Power" onClick={togglePowerPop}>
        <i className="fas fa-power-off"></i>
      </div>
      {powerPop && <PowerPop />}
    </>
  );
};

export default Power;
