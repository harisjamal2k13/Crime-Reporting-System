import React, { Component } from 'react';
import * as mat from 'material-ui';
import { Link } from 'react-router';
import LoadMyIncidentsContainer from '../../containers/loadMyIncidents';

class Dashboard extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        const style = {
            height: 100,
            width: 400,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
        };
        const customAnchor = {
            textDecoration: 'none',
            color: '#000'
        }
        return (
            <div>
                <LoadMyIncidentsContainer />
            </div>
        );
    }
}

export default Dashboard;