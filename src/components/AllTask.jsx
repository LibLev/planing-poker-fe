import React, {Component} from "react";
import axios from "axios";
import Task from "./Task";

class AllTask extends Component {

    state = {
        data: [],
        redirect: false
    }

    getTasks = () => {
        axios.get(`http://localhost:8080/get-all-task`)
            .then((response) => {
                    console.log(response.data);
                    this.setState({data: response.data})
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    componentDidMount() {
        this.getTasks();
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            localStorage.clear();
            window.location = "/"
        }
    }

    nextColleague = () => {
        this.setState({redirect: true})
    }

    render() {
        return (
            <div className="container-md" style={{marginTop: "30px"}}>
                <div>
                    {this.renderRedirect()}
                    <div className="container-md">
                        <div className="row-cols-1">
                            {this.state.data.map((d) => (<Task data={d}/>))}
                        </div>
                        <button type="button" onClick={this.nextColleague}>Next colleague</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AllTask;