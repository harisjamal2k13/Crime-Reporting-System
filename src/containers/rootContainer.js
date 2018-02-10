import React, { Component } from 'react';
import { logOutRequest } from '../store/actions/logout';
import { connect } from 'react-redux';
import { childAddedHandler } from '../store/actions/childAddedHandler';

import * as mat from 'material-ui';
import './logo.css';
import {
    browserHistory,
    Link
} from 'react-router';

class rootContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false, isAdmin: false };
    }

    handleClose = () => this.setState({ open: false });
    _handleClick = () => {
        this.setState({ open: !this.state.open })
    };

    gotoDashoard = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/dashboard');
    };

    gotoAvailable = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/addReport');
    };

    gotoComplains = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/myIncidents');
    };

    gotoViewCrimes = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/viewCrimes');
    };

    gotoAllViewCrimes = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/viewAllCrimes');
    };
    logOutRequest = () => {
        this.setState({ open: !this.state.open });
        this.props.logOutRequest();
    }

    render() {
        const style = {
            margin: '15px',
        };
        return (
            <div>
                <mat.AppBar
                    title="Crime report complain system" showMenuIconButton={false}>
                        <mat.RaisedButton label="Write complain" onTouchTap={this.gotoAvailable} type="button" primary={true} style={style} />
                        <mat.RaisedButton label="Home" onTouchTap={this.gotoDashoard} type="button" primary={true} style={style} />
                        <mat.RaisedButton label="Crimes List" onTouchTap={this.gotoViewCrimes} type="button" primary={true} style={style} />
                        <mat.RaisedButton label="LogOut" onTouchTap={this.logOutRequest} type="button" primary={true} style={style} />
                </mat.AppBar>
                {this.props.children}
            </div>
        );
    }
}


function mapStateToProps(state) {
    //here we are mapping the redux state to props so we can use it in our components
    return {
        application: state.application
    };
}

function mapDispatchToProps(dispatch) {
    //Those will be the actions we will be Triggerening from Components
    return {

        logOutRequest: () => dispatch(logOutRequest()),
    };
}

const rootMainContainer = connect(mapStateToProps, mapDispatchToProps)(rootContainer);

export default rootMainContainer;