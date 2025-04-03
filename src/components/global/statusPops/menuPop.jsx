import "./statusPop.css";

const MenuPop = () => {
  return (
    <div className="menuPop menuOpen">
      <div className="ind"></div>
      <div className="popPadd">
        <div className="popCont">
          <div className="search">
            <input
              type="search"
              name="search"
              id="search"
              className="search"
              placeholder="Type to search"
            />
          </div>
          <div className="quickAss menuApps">
            <div className="sides">
              <div className="left">s</div>
              <div className="right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                temporibus, omnis aliquid provident reiciendis obcaecati
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPop;
