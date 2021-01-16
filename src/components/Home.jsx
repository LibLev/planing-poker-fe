import React, {Component} from "react";
import Login from "./Login";
import TaskResults from "./TaskResults";

class Home extends Component {

    render() {
        return (
            <div>
                <Login/>
                <TaskResults/>
            </div>
        )
    }
}

export default Home