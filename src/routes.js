import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import {createBrowserHistory} from 'history';
const history = createBrowserHistory();
import Form from "./js/components/Form";
import Pagination from "./js/components/Pagination";
import FormCopy from "./js/components/FormCopy";

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Form} />
                <Route exact path="/form" component={FormCopy} />
                <Route exact path="/pagination" component={Pagination} />
                {/* <Redirect to={"/"} /> */}
            </Switch>
        </Router>
    )
}

export default Routes;