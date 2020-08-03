import React, { useState } from "react";
import { reduxform, reduxForm } from "redux-form";

import SurveyForm from "./SurveyForm/SurveyForm";
import SurveyFormReview from "./SurveyFormReview/SurveyFormReview";

const Surveynew = (props) => {
  const [formReview, setFormReview] = useState(false);

  const renderContent = () => {
    if (formReview) {
      return <SurveyFormReview onCancel={() => setFormReview(false)} />;
    }

    return <SurveyForm onSurveySubmit={() => setFormReview(true)} />;
  };

  return <div>{renderContent()}</div>;
};

export default reduxForm({
    form: 'surveyForm'
})(Surveynew);
