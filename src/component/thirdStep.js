import React, { Component, Fragment } from "react";
import { BsPersonFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { connect } from 'react-redux';

function createActionObj(typeVal, payLoadVal) {
    return {
        type: typeVal,
        payLoad: payLoadVal
    }
}

class ThirdStep extends Component {

    constructor() {
        super();
        this.state = {
            forMyself: false,
            forTeam: false,
        }
    }

    handleSubmit = () => {
        this.props.dispatch(createActionObj('next', "4"));
    }

    handleClick = (selected) => {
        selected === "self" ? this.setState({ forMyself: true, forTeam: false }) : this.setState({ forMyself: false, forTeam: true })
    }

    render() {
        return (
            <Fragment>
                <div className="pages text-center">
                    <h2>How are you planning to use Eden?</h2>
                    <p>We'll streamline your setup experience accordingly.</p>
                    <div className="forms">
                        <div className="row">
                            <div className="col">
                                <button className="choices" onClick={() => this.handleClick("self")}
                                    style={{ color: this.state.forMyself ? "rgb(102, 64, 238)" : null }}>
                                    <BsPersonFill className="icons" /><br />
                                    <h5>For myself</h5>
                                    <p>write better. Think more clearly. Stay Organized.</p>
                                </button>
                            </div>
                            <div className="col">
                                <button className="choices" onClick={() => this.handleClick("team")}
                                    style={{ color: this.state.forTeam ? "rgb(102, 64, 238)" : null }}>
                                    <RiTeamFill className="icons" /><br />
                                    <h5>With my team</h5>
                                    <p>Wikis, docs, tasks & projects, all in one place</p>
                                </button>
                            </div>
                        </div><br />
                        <button className="createButton" onClick={() => this.handleSubmit()}>Create Workspace</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps(value) {
    let { stepNumber } = value;
    return { stepNumber };
}

export default connect(mapStateToProps)(ThirdStep);