import React from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

import SurveyField from "../SurveyFields/SurveyField";
import validateEmails from "../../../utils/validateEmails";
import FIELDS from '../SurveyFields/formFields';


const SurveyForm = (props) => {
  const renderFields = () => {
    return FIELDS.map((field) => (
      <Field
        key={field.name}
        component={SurveyField}
        type="text"
        label={field.label}
        name={field.name}
      />
    ));
  };

  return (
    <div>
      <form onSubmit={props.handleSubmit(props.onSurveySubmit)}>
        {renderFields()}
        <Link
          to="/surveys"
          className="left waves-effect waves-light btn-small badge new"
        >
          cancel
        </Link>
        <button
          className="right waves-effect waves-light btn-small"
          type="submit"
        >
          Next
        </button>
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};

  errors.emails = validateEmails(values.recipients || "");

  FIELDS.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = "you must provide a value";
    }
  });

  return errors;
};

export default reduxForm({
  validate: validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
