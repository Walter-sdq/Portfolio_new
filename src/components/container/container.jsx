import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./container.css";
import "../pages/pages.css";
import Home from "../pages/home.component";
import NotFound from "../pages/404.component";

const Container = () => {
  return (
    <Router>
      <div className="wrapper">
        {/* <Nav logo={logo} home={home} completed={completed} pending={pending} trash={trash} /> */}

        <Switch>
          <Route exact path="/">
            <Home />
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
