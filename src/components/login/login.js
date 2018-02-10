import React, { Component } from 'react';
import './login.css';
import * as mat from 'material-ui';
import { browserHistory, Link } from 'react-router';
// import AppBar from 'material-ui/AppBar';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
        this.handleSubmit = this.handleLoginSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    componentDidMount() {
        this.props.loadInitialState();
    }
    handleLoginSubmit(evt) {
        evt.preventDefault();
        var email = evt.target.email.value;
        var password = evt.target.password.value;
        var userObj = { "email": email, "password": password };
        this.props.loginRequest(userObj);
    }
    componentWillReceiveProps() {
        setTimeout(() => {
            if (this.props.application && this.props.application.user) {
                browserHistory.push('/dashboard');
            }
        }, 100)
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        const customAnchor = {
            textDecoration: 'none',
            color: '#fff'
        }
        const style = {
            margin: 12,
        };
        const { application } = this.props.application;
        return (
            <div className="main-login-div">
                <mat.AppBar
                    title="Login"
                    showMenuIconButton={false}>
                    <Link to="/signup">
                        <mat.RaisedButton label="Create account" type="button" primary={true} style={style} />
                    </Link>
                </mat.AppBar>
                <mat.Card>
                    <mat.CardText>
                        <form onSubmit={this.handleSubmit} onChange={this.clearErrors}>
                            <mat.TextField
                                hintText="mani@mani.com"
                                floatingLabelText="Email"
                                className="full-width-container"
                                ref="email"
                                name="email"
                                required={true}
                                type="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                /><br />
                            <mat.TextField
                                hintText="123456"
                                ref="password"
                                name="password"
                                required={true}
                                type="password"
                                className="full-width-container"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                floatingLabelText="Password" />
                            <br />
                            <mat.FlatButton type="submit" label="Submit" primary={true} />
                        </form>
                    </mat.CardText>
                </mat.Card>
            </div>
        );
    }
}

export default Login;