import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./container.css";
import "../pages/pages.css";
import Home from "../pages/home.component";
import NotFound from "../pages/404.component";
import Test from "../test";

const Container = () => {
  return (
    <Router>
      <div className="wrapper">
        {/* <Nav logo={logo} home={home} completed={completed} pending={pending} trash={trash} /> */}

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/src/assets/imgs/image.png"></Route>{" "}
          <Route exact path="/test">
            <Test />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Container;
