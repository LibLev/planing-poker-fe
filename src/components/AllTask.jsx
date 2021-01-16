import React, {Component} from "react";
import axios from "axios";
import Task from "./Task";

class AllTask extends Component{

    state = {
        data : []
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

    render() {
        return(
            <div className="container-md">
                <div className="row-cols-1">
                    {this.state.data.map((d) => (<Task data={d}/>))}
                </div>
            </div>
        )
    }

}
export default AllTask;