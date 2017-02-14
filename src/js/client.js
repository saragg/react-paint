import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, IndexRedirect } from "react-router";

import Paint from "./pages/Paint";
import Layout from "./pages/Layout";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
        <IndexRedirect to="/paint" />
        <Route path="paint(/:id)" component={Paint}></Route>
    </Route>
  </Router>,
app);
