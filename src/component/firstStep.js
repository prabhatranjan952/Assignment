import React, { Component, Fragment } from "react"
import { connect } from 'react-redux';

function createActionObj(typeVal, payLoadVal) {
    return {
        type: typeVal,
        payLoad: payLoadVal
    }
}

class FirstStep extends Component {

    constructor() {
        super();
        this.state = {
            form: {
                fullName: "",
                displayName: "",
            },
            errMsg: "",
        }
    }

    handleChange = (event) => {
        let { name, value } = event.target;
        this.state.form[name] = value;
        this.setState({ form: this.state.form });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(createActionObj('next', "2"));
    }

    render() {
        return (
            <Fragment>
                <div className="text-center">
                    <h2>Welcome! First things first...</h2>
                    <p>You can always change them later.</p>
                    <form onSubmit={this.handleSubmit} className="forms">
                        <div className="form-group">
                            <label className="inputLabels">Full Name</label><br />
                            <input type="text" className="form-control" id="fullName" name="fullName" placeholder="Steve Jobs" onChange={this.handleChange} />
                        </div><br />
                        <div className="form-group">
                            <label className="inputLabels">Display Name</label><br />
                            <input type="text" className="form-control" id="displayName" name="displayName" placeholder="Steve" onChange={this.handleChange} />
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

export default connect(mapStateToProps)(FirstStep);