import React, {Component} from "react";
import axios from "axios";

class ResultTable extends Component {

    state = {
        redirect: false,
        data: []
    }

    getResultsOfTask = () => {
        axios.get(`http://localhost:8080/get-result-by-task/` + localStorage.getItem("taskId"))
            .then((response) => {
                console.log(response.data)
                this.setState({data: response.data})
            })
            .catch((error) => {
                console.log(error)
            })
    }

    componentDidMount() {
        this.getResultsOfTask();
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            localStorage.clear();
            window.location = "/"
        }
    }

    backToTaskResults = () => {
        this.setState({redirect: true})
    }

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Value</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.entries(this.state.data).map(([key, value]) => (
                        <tr>
                            <td>{key}</td>
                            <td>{value}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button type="button" onClick={this.backToTaskResults}>Back to all Result</button>
            </div>
        )
    }
}

export default ResultTable;