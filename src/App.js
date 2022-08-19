import React, { Component, Fragment } from 'react';
import './App.css';
import { connect } from 'react-redux';
import FirstStep from './component/firstStep';
import SecondStep from './component/secondStep';
import ThirdStep from './component/thirdStep';
import FourStep from './component/fourthStep';
import { AiFillFire } from "react-icons/ai";
import { Stepper, Step, StepLabel } from '@mui/material';

class App extends Component {

  show = (status) => {
    switch (status) {
      case "1":
        return (
          <FirstStep />
        );
      case "2":
        return (
          <SecondStep />
        );
      case "3":
        return (
          <ThirdStep />
        );
      case "4":
        return (
          <FourStep />
        );
      default:
        break;
    }
  }

  render() {
    const status = this.props.stepNumber;
    return (
      <Fragment>
        <div>
          <h2 className="headText text-center"><AiFillFire className="icons" /> Eden</h2>
          <Stepper className="progressBar" activeStep={status} orientation="horizontal" style={{ width: "25%" }}>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper><br />
          {this.show(status)}
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps(value) {
  let { stepNumber } = value;
  return { stepNumber };
}

export default connect(mapStateToProps)(App);
