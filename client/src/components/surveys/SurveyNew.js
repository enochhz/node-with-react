// SurveyNew shows SurveyForm
import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReivew from "./SurveyFormReview";

class SurveyNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReviw === true) {
      return <SurveyFormReivew />;
    }
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReviw: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default SurveyNew;
