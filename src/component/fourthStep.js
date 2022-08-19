import React, { Component, Fragment } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

class FourStep extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <div className="text-center">
                    <AiFillCheckCircle size={50} className="icons" /><br /><br />
                    <h2>Congratulations, Eren!</h2>
                    <p>you have completed onboarding, you can start using Eden!</p>
                    <button className="launchEden">Launch Eden</button>
                </div>
            </Fragment>
        )
    }
}

export default FourStep;