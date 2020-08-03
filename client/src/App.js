import React, { useEffect, useCallback } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "./components/Header/Header";
import Dashboard from './components/Dashboard/Dashboard';
import * as actions from "./store/actions/index";

const SurveryNew = () => <h2>SurveryNew</h2>;
const Landing = () => <h2>Landing</h2>;

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
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveryNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
