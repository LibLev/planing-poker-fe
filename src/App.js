import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Voter from "./components/Voter";
import TaskResults from "./components/TaskResults";
import ResultTable from "./components/ResultTable";
import Home from "./components/Home";

class App extends Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/vote" component={Voter}/>
                        <Route path="/task-results" component={TaskResults}/>
                        <Route path="/result-table" component={ResultTable}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
