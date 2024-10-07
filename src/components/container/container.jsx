
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './container.css'
import '../pages/pages.css'
import Home from "../pages/home.component";
import NotFound from "../pages/404.component";
import BatteryStatus from "../test";

const Container = () => {

    return (
        <Router>
            <div className="wrapper">

                {/* <Nav logo={logo} home={home} completed={completed} pending={pending} trash={trash} /> */}

                <Switch >

                    <Route exact path="/">
                        <Home />
                    </Route>
                    {/* <Route  exact path='/completed'>
                        <Completed />
                    </Route>

                    <Route  exact path='/pending'>
                        <Pending />
                    </Route>

                    <Route  exact path='/trashed'>
                        <Trashed />
                    </Route> */}

                    {/* <Route path='/lists/:id'>
                        <Details type='lists' />
                    </Route>

                    <Route path='/completed/:id'>
                        <Details type='completed' />
                    </Route>

                    <Route path='/pending/:id'>
                        <Details type='pending' />
                    </Route>

                    <Route path='/trashed/:id'>
                        <Details type='trashed' />
                    </Route> */}
                    <Route path='/test'>
                        <BatteryStatus />
                    </Route>
                    <Route path='*'>
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Container;