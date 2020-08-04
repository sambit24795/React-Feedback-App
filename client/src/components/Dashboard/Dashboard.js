import React, { useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./Dashboard.css";
import * as actions from "../../store/actions/authActions";

const Dashboard = () => {
  const surveyList = useSelector((state) => state.surveys);

  const dispatch = useDispatch();
  const fetchSurveys = useCallback(() => dispatch(actions.fetchSurveys()), [
    dispatch,
  ]);

  useEffect(() => {
    fetchSurveys();
  }, [fetchSurveys]);

  const renderSurveys = () => {
    return surveyList.map((survey) => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content white-text">
            <span className="card-title">
              <h5>{survey.title}</h5>
            </span>
            <p>{survey.body}</p>
            <p className="right">
              sent on: {new Date(survey.dateSent).toLocaleString()}
            </p>
          </div>
          <div className="card-action">
            <p>
              <a>Good: {survey.yes}</a>
              <a className="right"> Can be better: {survey.no}</a>
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div>{renderSurveys()}</div>
      <div className="fixed-action-btn">
        <Link
          to="/surveys/new"
          className="btn-floating btn-large waves-effect waves-light"
        >
          <svg
            className="addBtn"
            height="448pt"
            viewBox="0 0 448 448"
            width="32px"
          >
            <path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(Dashboard);
