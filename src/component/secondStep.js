import React, { Component, Fragment } from "react"
import { connect } from 'react-redux';

function createActionObj(typeVal, payLoadVal) {
    return {
        type: typeVal,
        payLoad: payLoadVal
    }
}

class SecondStep extends Component {

    constructor() {
        super();
        this.state = {
            form: {
                workspaceName: "",
                workspaceUrl: "",
            }
        }
    }

    handleChange = (event) => {
        let { name, value } = event.target;
        this.state.form[name] = value;
        this.setState({ form: this.state.form });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(createActionObj('next', "3"));
    }

    render() {
        return (
            <Fragment>
                <div className="text-center">
                    <h2>Let's set up a home for all your Work</h2>
                    <p>You can always create another workspace later.</p>
                    <form onSubmit={this.handleSubmit} className="forms">
                        <div className="form-group">
                            <label className="inputLabels">Workspace Name</label><br />
                            <input type="text" className="form-control" id="workspaceName" name="workspaceName" placeholder="Eden" onChange={this.handleChange} />
                        </div><br />
                        <div className="form-group">
                            <label className="inputLabels">Workspace URL (optional)</label>
                            <br />
                            <input type="text" className="form-control" id="workspaceUrl" name="workspaceUrl" placeholder="www.eden.com/Example" onChange={this.handleChange} />
                        </div><br />
                        <button type="submit" className="createButton">Create Workspace</button>
                    </form>
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps(value) {
    let { stepNumber } = value;
    return { stepNumber };
}

export default connect(mapStateToProps)(SecondStep);