import React, {Component} from "react";

class Task extends Component {

    state = {
        redirect : false
    }

    openResult = () => {
        localStorage.setItem("taskId", this.props.data.id)
        this.setState({redirect : true})
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            window.location = "/result-table"
        }
    }

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <div className="card">
                    <h5 className="card-header">{this.props.data.nameOfTask}</h5>
                    <div className="card-body">
                        <p className="card-text">{this.props.data.description}</p>
                    </div>
                    <div>
                        <button onClick={this.openResult}>Results</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Task;