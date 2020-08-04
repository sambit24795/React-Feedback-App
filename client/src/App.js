import React, { useEffect, useCallback } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import SurveyNew from "./components/Surveys/Surveynew";
import * as actions from "./store/actions/index";

const App = () => {
  const dispatch = useDispatch();

  const onFetchUser = useCallback(() => dispatch(actions.fetchUser()), [
    dispatch,
  ]);

  useEffect(() => {
    onFetchUser();
  }, [onFetchUser]);

  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route exact path="/surveys/new" component={SurveyNew} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
