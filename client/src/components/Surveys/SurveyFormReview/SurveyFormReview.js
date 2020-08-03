import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import FIELDS from "../SurveyFields/formFields";
import "./SurveyFormReview.css";
import * as actions from "../../../store/actions/index";

const SurveyReview = (props) => {
  const formValues = useSelector((state) => state.form.surveyForm.values);

  const dispatch = useDispatch();
  const submitHandler = (values, history) =>
    dispatch(actions.submitSurvey(values, history));

  const reviewField = FIELDS.map((field) => (
    <div key={field.name}>
      <label>{field.label}</label>
      <div>{formValues[field.name]}</div>
    </div>
  ));

  return (
    <div>
      <h4>Please confirm your entries!</h4>
      {reviewField}
      <button
        className="left waves-effect waves-light btn-small badge new"
        onClick={props.onCancel}
      >
        Back
      </button>
      <button
        className="right waves-effect waves-light btn-small small-btn"
        onClick={() => submitHandler(formValues, props.history)}
      >
        Submit
      </button>
    </div>
  );
};

export default withRouter(SurveyReview);
