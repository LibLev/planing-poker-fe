import React, {Component} from "react";
import axios from "axios";

class Task extends Component{

    state = {
        value : null,
        taskId : this.props.data.id,
        name: ""
    }

    valueOnChange = event => {
        this.setState({value: event.target.value})
    }

    sendVote = () => {
        axios.post(`http://localhost:8080/add-value-to-task`,
            {
                name : localStorage.getItem("name"),
                taskId : this.state.taskId,
                cardValue : this.state.value
            })
    }

    render() {
        return(
            <div>
                <div className="card">
                    <h5 className="card-header">{this.props.data.nameOfTask}</h5>
                    <div className="card-body">
                        <p className="card-text">{this.props.data.description}</p>
                    </div>
                    <div className="card-row">
                        <select name="value" onChange={this.valueOnChange}>
                            <option value="0">Please select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="5">5</option>
                            <option value="8">8</option>
                            <option value="13">13</option>
                            <option value="21">21</option>
                            <option value="34">34</option>
                            <option value="55">55</option>
                            <option value="89">89</option>
                        </select>
                        <button onClick={this.sendVote}>Vote</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Task;