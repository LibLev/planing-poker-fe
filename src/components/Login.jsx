import React, {Component} from "react";
import axios from "axios";

class Login extends Component{

    state = {
        name: "",
        redirect: false
    }

    nameOnChange = (event) => {
        this.setState({name: event.target.value});
        console.log(this.state.name);
    };

    login = () => {
        axios.post(`http://localhost:8080/add-name`,
            {
                name: this.state.name,
            }
        ).then(resp => {
            console.log(resp.data.success);
            localStorage.setItem("name", resp.data.name);
            this.setState({redirect: true});
        }).catch((e) => {
            console.log(e.message)
        })

    };

    renderRedirect = () => {
        if (this.state.redirect) {
            window.location = "/vote"
        }
    };

    render(){
        return(
            <div className="container-md" style={{marginTop: "30px"}}>
                <div>
                    {this.renderRedirect()}
                    <div className="container-sm">
                        <div className="card text-sm-center" style={{ margin: "0 auto",
                            float: "none",
                            marginBottom: "10px"}}>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="name" value={this.state.name}
                                               onChange={this.nameOnChange}
                                               placeholder="name"/>
                                    </div>
                                </form>
                                <button type="button" className="btn-primary" onClick={this.login}>
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}
export default Login;