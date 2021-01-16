import React, {Component} from "react";

class Task extends Component{

    render() {
        return(
            <div>
                <div className="card">
                    <h5 className="card-header">{this.props.data.nameOfTask}</h5>
                    <div className="card-body">
                        <p className="card-text">{this.props.data.description}</p>
                        <select name="value">
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
                    </div>
                </div>
            </div>
        )
    }
}
export default Task;