import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import AllTask from "./components/AllTask";

class App extends Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Login}/>
                        <Route path="/vote" component={AllTask}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
