import { useState } from "react";
import MenuPop from "../statusPops/menuPop";

const Menu = () => {
  const [menuPop, setMenuPop] = useState(false);
  const toggleMenuPop = () => {
    setMenuPop(!menuPop);
  };
console.log(menuPop);

  return (
    <>
      <div className="nav menu btn" onClick={toggleMenuPop}>
        <i className="fab fa-ubuntu"></i> <p>menu</p>
      </div>
      {menuPop && <MenuPop />}
    </>
  );
};

export default Menu;
