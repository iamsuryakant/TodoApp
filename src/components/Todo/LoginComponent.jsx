import React, { Component} from 'react';
import AuthenticationService from './AuthenticationService';

class LoginComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            username: "iamsuryakant",
            password: "",
            hasLoginFailed: false,
            showSuccessMessage: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.loginClick = this.loginClick.bind(this);
    }


    handleChange = (event) => {
        
        this.setState({
            
            [event.target.name]: event.target.value
        });
    }

    loginClick = () => {
        // if (this.state.username === 'iamsuryakant' && this.state.password === 'dummy') {
        //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
        //     this.props.history.push(`/welcome/${this.state.username}`);
        //     // this.setState({ showSuccessMessage: true });
        //     // this.setState({hasLoginFailed: false});
        // }
        // else {
        //     this.setState({showSuccessMessage: false});
        //     this.setState({hasLoginFailed: true});
        // }
        // //console.log(this.state);

        // AuthenticationService
        //     .executeBasicAuthenticationService(this.state.username, this.state.password)
        //     .then(() => {
        //         AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
        //         this.props.history.push(`/welcome/${this.state.username}`);
        //     }).catch(() => {
        //         this.setState({ showSuccessMessage: false });
        //         this.setState({ hasLoginFailed: true });
        //     });
        
        
        
        
        
        AuthenticationService
            .executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token);
                this.props.history.push(`/welcome/${this.state.username}`);
            }).catch(() => {
                this.setState({ showSuccessMessage: false });
                this.setState({ hasLoginFailed: true });
            });
        
        
        
    }



    render() {

        return (

            <div className="Login">
                
                <h1>Login</h1>
                <div className="container">
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                    {this.state.hasLoginFailed && <div className = "alert alert-warning">Login Failed. Please check you credentials and login again.</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    {/* <ShowSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
                    username: <input className = "bt" type = "text" placeholder="username" name="username"  value={this.state.username} onChange={this.handleChange}/>
                    password: <input type="password"  placeholder= "password" name= "password" value={this.state.password} onChange ={this.handleChange} />
                    <button className = "btn btn-primary" onClick={this.loginClick}>Login</button>
                </div>
            </div>
        );
    }


}

export default LoginComponent;