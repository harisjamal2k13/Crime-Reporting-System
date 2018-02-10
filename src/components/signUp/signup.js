import React, { Component } from 'react';
import './signup.css';
import * as mat from 'material-ui';
import { browserHistory, Link } from 'react-router';

class SignUp extends Component {
    citiesGroup;
    constructor(props) {
        super(props);
        this.citiesGroup = [
            "Huntsville",
            "Anchorage",
            "Phoenix",
            "Little-Rock",
            "Sacramento",
            "Los-Angeles",
            "Beverly-Hills",
            "Denver",
            "Hartford",
            "Washington"
        ]
        this.state = { email: '', password: '', name: '', gender: 1, cityname: "Washington" };
        this.handleSubmit = this.handleLoginSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    componentDidMount() {
        this.props.loadInitialState();
    }

    componentWillReceiveProps() {
        setTimeout(() => {
            if (this.props.application && this.props.application.user) {
                browserHistory.push('/dashboard');
            }
        }, 100)
    }

    handleCityTypeChange = (event, index, value) => this.setState({ cityname: value });
    handleGenderTypeChange = (event, index, value) => this.setState({ gender: value });

    handleLoginSubmit(evt) {
        evt.preventDefault();
        let userObj = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            gender: this.state.gender,
            cityname: this.state.cityname,
            cellNumber: this.state.cellNumber,
        }
        this.props.signUpRequest(userObj);
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
        const style = {
            margin: 12,
        };
        const { application } = this.props.application;
        return (
            <div className="main-login-div">
                <mat.AppBar
                    title="Sign Up"
                    showMenuIconButton={false}>
                    <Link to="/login">
                        <mat.RaisedButton label="Login" type="button" primary={true} style={style} />
                    </Link>
                </mat.AppBar>
                <mat.Card>
                    <mat.CardText>
                        <form onSubmit={this.handleSubmit}>
                            <mat.TextField
                                hintText="mani@exm.com"
                                floatingLabelText="Email"
                                className="full-width-container"
                                ref="email"
                                name="email"
                                required
                                type="email"
                                onChange={this.handleInputChange}
                                /><br />
                            <mat.TextField
                                hintText="password"
                                ref="password"
                                name="password"
                                required
                                type="password"
                                className="full-width-container"
                                onChange={this.handleInputChange}
                                floatingLabelText="Password" />
                            <br />
                            <mat.TextField
                                hintText="Majid Ashraf"
                                floatingLabelText="Name"
                                className="full-width-container"
                                ref="name"
                                name="name"
                                required
                                type="text"
                                onChange={this.handleInputChange}
                                /><br />
                            <mat.TextField
                                hintText="00001111"
                                floatingLabelText="Cell Number"
                                className="full-width-container"
                                ref="cellNumber"
                                name="cellNumber"
                                required
                                type="text"
                                onChange={this.handleInputChange}
                                /><br />
                            <mat.SelectField
                                ref="gender"
                                name="gender"
                                floatingLabelText="Gender"
                                onChange={this.handleGenderTypeChange}
                                className="full-width-container"
                                value={this.state.gender}
                                required
                                >
                                <mat.MenuItem value={1} primaryText="Male" />
                                <mat.MenuItem value={2} primaryText="Female" />
                            </mat.SelectField>
                            <mat.SelectField
                                ref="cityname"
                                name="cityname"
                                floatingLabelText="City Name"
                                onChange={this.handlecitynameChange}
                                value={this.state.cityname}
                                className="full-width-container"
                                required={true}
                                >
                                {
                                    this.citiesGroup.map(citiesgroup => {
                                        return <mat.MenuItem key={citiesgroup} value={citiesgroup}
                                            primaryText={citiesgroup} />
                                    })
                                }
                            </mat.SelectField>
                            <mat.RaisedButton type="submit" label="Submit" primary={true} />
                        </form>
                    </mat.CardText>
                </mat.Card>
            </div>
        );
    }
}

export default SignUp;